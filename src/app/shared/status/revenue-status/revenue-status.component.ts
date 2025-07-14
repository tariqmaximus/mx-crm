import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsGridComponent } from '../../../test-lib/metrics-grid/metrics-grid.component';
import { ChartComponent } from '../../../common/charts/chart/chart.component';
import { CardComponent } from '../../../common/card/card.component';
import { DatePickerComponent } from '../../../common/date-picker/date-picker.component';
import { ModalService } from '../../../common/modal/modal.service';

@Component({
  selector: 'revenue-status',
  standalone: true,
  imports: [CommonModule, MetricsGridComponent, ChartComponent, CardComponent],
  templateUrl: './revenue-status.component.html',
  styleUrl: './revenue-status.component.css'
})
export class RevenueStatusComponent {
  activeTab: 'table' | 'chart' = 'chart';

  chartTabs = [
    {
      name: 'Monthly Revenue - 2025',
      data: [
        { name: 'Jan', y: 12 },
        { name: 'Feb', y: 18 },
        { name: 'Mar', y: 22 },
        { name: 'Apr', y: 16 },
        { name: 'May', y: 25 },
        { name: 'Jun', y: 19 },
        { name: 'Jul', y: 21 },
        { name: 'Aug', y: 23 },
        { name: 'Sep', y: 20 },
        { name: 'Oct', y: 26 },
        { name: 'Nov', y: 17 },
        { name: 'Dec', y: 30 }
      ].map((item, index) => ({
        ...item,
        color: this.getColorByIndex(index)
      }))
    }
  ];

  tableData = this.chartTabs[0].data.map(item => ({
    month: item.name,
    revenue: item.y
  }));

  setActiveTab(tab: 'table' | 'chart') {
    this.activeTab = tab;
  }

  constructor(private modalService: ModalService) {}

  onDateRangeClick() {
    this.modalService.openDynamicModal(
      'Select Date Range',
      'Apply',
      'DateRangePicker',
      DatePickerComponent,
      'modal-sm'
    );
  }

  headerButtons = [
    {
      label: '2025',
      icon: 'icon-calendar',
      targetId: 'DateRangePicker',
      action: () => this.onDateRangeClick()
    }
  ];

  getColorByIndex(index: number): string {
    const colors = [
      '#cceeff', '#c7eed8', '#e2c4f6', '#ffd98a', '#f4b6b6',
      '#a0c4ff', '#bdb2ff', '#ffc6ff', '#fffffc', '#d0f4de',
      '#fef9c7', '#fcd5ce'
    ];
    return colors[index % colors.length];
  }
}
