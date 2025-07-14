import {
  Component,
  Input,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
  TemplateRef,
  ViewChild 
} from '@angular/core';
import 'zone.js';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { statusMap as defaultStatusMap } from './status-map';

interface CardButton {
  label?: string;
  icon?: string;
  targetId: string;
  action?: () => void;
}

interface ActionButton {
  label?: string;
  tooltip: string;
  icon?: string;
  className?: string;
  isDropdown?: boolean;
  options?: string[];
  action?: (row: any) => void;
  dropdownAction?: (selected: string, row: any) => void;
}

let uniqueCounter = 0;

@Component({
   selector: 'metrics-grid',
  templateUrl: './metrics-grid.component.html',
  imports:[CommonModule, FormsModule],
  styleUrls: ['../assets/css/metrics-grid.css']
})
export class MetricsGridComponent implements OnInit, OnChanges {
    @ViewChild('emptyTemplate', { static: true }) emptyTemplate!: TemplateRef<any>;
 @Input() columns: { key: string; label: string; type?: string; options?: string[] }[] = [];
@Input() data: any[] = [];

@Input() autoGenerateColumns: boolean = true;
@Input() excludeColumns: string[] = [];
@Input() filterBy: string = '';
@Input() filterStyle: ('tabs' | 'dropdown' | 'date' | 'keyword' | 'none')[] = [];

@Input() searchButton: boolean = true;
@Input() Sorting: boolean = false;
@Input() pageSize: number = 10;
@Input() paginated: boolean = false;
@Input() showActions: boolean = true;

@Input() actionButtons: ActionButton[] = [];
@Input() headerButtons: CardButton[] = [];

@Input() collapsible: boolean = false;
@Input() addNewRowItem: boolean = false;

@Input() variant: string = '';
@Input() metricsHeader: boolean = true;
@Input() showFooter: boolean = false;

@Input() icon: string = '';
@Input() title: string = '';
@Input() sub: string = '';

@Input() mediaImage: string = '';
@Input() nameLetters: string = '';
@Input() mediaStatus: string = '';

@Input() idPrefix: string = '';
@Input() valueLength: string[] = [];
@Input() progressBy: string = '';

@Input() headerObject: TemplateRef<any> | null = null;
@Input() footerObject: TemplateRef<any> | null = null;


  @Input() statusMap: Record<string, string> = defaultStatusMap;

  @Output() rowAction = new EventEmitter<{ action: string; row: any }>();

  internalIdPrefix!: string;
  isCollapsed = false;
  activeRowIndex: number | null = null;
  selectedRows: any[] = [];
  filteredData: any[] = [];
  searchKeyword = '';
  selectedOption = '';
  currentPage = 1;
  sortKey: string | null = null;
  sortAsc: boolean = true;
  dropdownShownIndex: number | null = null;
  imageLoadFailedMap: Record<string, boolean> = {};
  selectedDate: string = '';
  newRow: any = null;

  ngOnInit(): void {
    this.initializeDefaults();
    this.internalIdPrefix = this.idPrefix || `metrics-${uniqueCounter++}`;
    this.normalizeActionButtons();
    this.setColumns();
    this.applyFilters();
    this.columns ??= [];
    
  }

  ngOnChanges(): void {
    this.initializeDefaults();
    this.setColumns();
    this.applyFilters();
    
  }

  initializeDefaults(): void {
    this.data = this.data || [];
    this.columns = this.columns || [];
    this.actionButtons = this.actionButtons || [];
    this.headerButtons = this.headerButtons || [];
    this.filteredData = [...this.data];
    this.valueLength = this.valueLength || [];
    this.statusMap = this.statusMap || {};
    this.headerObject ??= null;
this.footerObject ??= null;
  }

setColumns(): void {
  if (this.autoGenerateColumns && this.data.length > 0) {
    const keys = Object.keys(this.data[0]).filter(
  k => k && k !== 'false' && !this.excludeColumns.includes(k)
);

    this.columns = keys.map(key => {
      const lowerKey = key.toLowerCase();
      const values = this.data.map(row => row?.[key]).filter(v => v !== undefined && v !== null);
      const uniqueValues = Array.from(new Set(values.map(v => String(v).trim())));
      const isMostlyNumeric = values.every(v => typeof v === 'number' || (!isNaN(Number(v)) && v !== ''));

      // 🔒 Heuristic to block select-type for free-text fields
      const isFreeTextLikely = lowerKey.includes('name')
        || lowerKey.includes('email')
        || lowerKey.includes('phone')
        || uniqueValues.some(v => /[@\d]/.test(v) || v.split(' ').length > 1);

      let type: string = 'text';
      let options: string[] | undefined;

      if (lowerKey.includes('date')) {
        type = 'date';
      } else if (lowerKey.includes('media')) {
        type = 'media';
      } else if (
        !isFreeTextLikely &&
        uniqueValues.length > 1 &&
        uniqueValues.length <= 10 &&
        !isMostlyNumeric
      ) {
        type = 'select';
        options = uniqueValues.sort();
      }

      return {
        key,
        label: this.toLabel(key),
        type,
        ...(options ? { options } : {})
      };
    });
  }

 if (
  this.showActions === true &&
  Array.isArray(this.actionButtons) &&
  this.actionButtons.length > 0 &&
  Array.isArray(this.columns) &&
  !this.columns.some(col => col?.key === 'action')
) {
  this.columns.push({
    key: 'action',
    label: 'Actions',
    type: 'action'
  });
}

}




  addNewRow(): void {
    this.newRow = {};
    this.columns.forEach(col => this.newRow[col.key] = '');
  }

  saveNewRow(): void {
    if (this.newRow) {
      this.data.unshift(this.newRow);
      this.newRow = null;
      this.applyFilters();
    }
  }

  cancelNewRow(): void {
    this.newRow = null;
  }
get shouldPaginate(): boolean {
  return this.data.length > this.pageSize;
}
  get searchKey(): string {
    return this.filterBy || '';
  }

  get prefix(): string {
    return this.internalIdPrefix;
  }

  get searchOptions(): string[] {
    const key = this.searchKey;
    if (!key || !Array.isArray(this.data)) return [];
    return [...new Set(this.data.map(item => item?.[key]).filter(Boolean))]
      .filter((v): v is string => typeof v === 'string')
      .sort((a, b) => a.localeCompare(b));
  }

get pagedData(): any[] {
  const start = (this.currentPage - 1) * this.pageSize;
  return this.shouldPaginate ? this.filteredData.slice(start, start + this.pageSize) : this.filteredData;
}

get totalPages(): number {
  return this.shouldPaginate ? Math.ceil(this.filteredData.length / this.pageSize) : 1;
}

toggleAllRows(e: Event): void {
  const cb = e.target as HTMLInputElement;
  this.selectedRows = cb.checked ? [...this.pagedData] : [];
}

isAllSelected(): boolean {
  return this.pagedData.length > 0 && this.selectedRows.length === this.pagedData.length;
}
  get progressValue(): number {
    const key = this.searchKey;
    if (!this.progressBy || !key || !this.data.length) return 0;
    const statusToCheck = this.selectedOption || this.progressBy;
    const total = this.data.length;
    const match = this.data.filter(item => item[key] === statusToCheck).length;
    return Math.round((match / total) * 100);
  }

  getTabCount(option: string): number {
    const key = this.searchKey;
    if (!key) return 0;
    return this.filteredData.filter(item => item[key] === option).length;
  }

  sortByColumn(key: string): void {
    if (this.sortKey === key) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortKey = key;
      this.sortAsc = true;
    }
    this.applyFilters();
  }

  applyFilters(): void {
    const key = this.searchKey;
    this.filteredData = this.data.filter(item => {
      const keywordMatch = !this.searchKeyword || Object.values(item || {}).some(val =>
        val != null && String(val).toLowerCase().includes(this.searchKeyword.toLowerCase())
      );

      const optionMatch = !this.selectedOption || (key && item?.[key] === this.selectedOption);

      const itemDate = item?.date ? new Date(item.date).toISOString().split('T')[0] : null;
      const dateMatch = !this.filterStyle.includes('date') || !this.selectedDate || !itemDate || itemDate === this.selectedDate;

      return keywordMatch && optionMatch && dateMatch;
    });

    if (this.sortKey) {
      this.filteredData.sort((a, b) => {
        const aVal = a?.[this.sortKey!] ?? '';
        const bVal = b?.[this.sortKey!] ?? '';
        return this.sortAsc ? (aVal > bVal ? 1 : -1) : (aVal < bVal ? 1 : -1);
      });
    }

    this.currentPage = 1;
  }

  toggleDropdown(index: number, event: MouseEvent): void {
    event.stopPropagation();
    this.dropdownShownIndex = this.dropdownShownIndex === index ? null : index;
  }

  selectTabOption(option: string): void {
    this.selectedOption = option;
    this.applyFilters();
  }

  normalizeActionButtons(): void {
    this.actionButtons = this.actionButtons.map(btn =>
      typeof btn === 'string' ? { label: btn, tooltip: btn, className: 'btn' } : btn
    );
  }

  handleImageError(event: Event, row: any): void {
    if (!row) return;
    const key = this.getRowKey(row);
    if (key) this.imageLoadFailedMap[key] = true;

    const img = event.target as HTMLImageElement;
    if (img?.src) img.src = '';
  }

  getRowKey(row: any): string {
    if (!row || typeof row !== 'object') return '';
    try {
      if (row.id) return String(row.id);
      if (this.searchKey && row[this.searchKey]) return String(row[this.searchKey]);
      if (row.name) return String(row.name);
      return JSON.stringify(row);
    } catch {
      return '';
    }
  }

  handleButtonClick(btn: ActionButton, row: any): void {
    btn.action?.(row);
    this.rowAction.emit({ action: btn.label || '', row });
  }

  handleDropdownClick(option: string, btn: ActionButton, row: any): void {
    if (!btn || !row || !option) return;
    btn.dropdownAction?.(option, row);
  }

  toggleRowClass(i: number): void {
    this.activeRowIndex = this.activeRowIndex === i ? null : i;
  }

  toggleCard(): void {
    if (this.collapsible) this.isCollapsed = !this.isCollapsed;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  prevPage(): void {
    if (this.currentPage > 1) this.currentPage--;
  }

  toggleSelectRow(row: any, e: Event): void {
    const cb = e.target as HTMLInputElement;
    cb.checked ? this.selectedRows.push(row) : this.selectedRows = this.selectedRows.filter(r => r !== row);
  }



  handleBulkAction(btn: ActionButton): void {
    if (!this.selectedRows.length) return alert('Please select at least one row.');
    btn.action?.(this.selectedRows);
    if (btn.dropdownAction && btn.options?.length) {
      const userChoice = prompt(`Choose an option: ${btn.options.join(', ')}`) || btn.options[0];
      this.selectedRows.forEach(row => btn.dropdownAction!(userChoice, row));
    }
  }

  handleBulkDropdownAction(btn: ActionButton, option: string): void {
    if (!this.selectedRows.length) {
      alert('Please select at least one row.');
      return;
    }
    this.selectedRows.forEach(row => btn.dropdownAction?.(option, row));
  }

  onSearchKeywordChange(value: string): void {
    this.searchKeyword = value;
    this.applyFilters();
  }

  executeAction(button: CardButton): void {
    button.action?.();
  }

  toLabel(key: string): string {
    return key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }

  trackByIndex(index: number): number {
    return index;
  }

  shouldApplyvalueLength(key: string): boolean {
    return this.valueLength.includes(key);
  }
getValue(row: any, key: string): string {
  if (!row || typeof row !== 'object' || !key || key === 'false') {
    return '-';
  }

  try {
    const val = row?.[key];
    return val !== undefined && val !== null ? String(val) : '-';
  } catch (error) {
    console.warn(`⚠️ getValue() failed for key: "${key}"`, error);
    return '-';
  }
}

getStatusStyles(status: string | null | undefined): { tagClass: string; progressClass: string } {
  const safeStatus = (status ?? '').toString().toLowerCase().trim();
  const color = this.statusMap?.[safeStatus] ?? 'info';

  return {
    tagClass: `metrics-tag ${color}`,
    progressClass: `progress-bar ${color}`
  };
}
  getMediaStatusClass(status: string | null | undefined): string {
    const safeStatus = (status ?? '').toString().toLowerCase().trim();
    return this.statusMap?.[safeStatus] ?? 'info';
  }

  getMediaImage(row: any): string {
    return row?.mediaImage || this.mediaImage || 'assets/default-image.png';
  }

  getNameLetters(row: any): string {
    return row?.name ? row.name.split(' ').map((n: string) => n[0]).join('').toUpperCase() : this.nameLetters;
  }
getProgressClass(status: string | null | undefined): string {
  const safeStatus = (status ?? '').toString().toLowerCase().trim();
  const color = this.statusMap?.[safeStatus] ?? 'info';
  return `progress-bar ${color}`;
}

}
