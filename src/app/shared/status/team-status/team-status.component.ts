import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from '../../../common/charts/chart/chart.component';
import { CardComponent } from '../../../common/card/card.component';
import { DatePickerComponent } from '../../../common/date-picker/date-picker.component';
import { ModalService } from '../../../common/modal/modal.service';
import { MetricsGridComponent } from '../../../services/metrics-grid/lib/metrics-grid.component';

@Component({
  selector: 'team-status',
  standalone: true,
  imports: [CommonModule, MetricsGridComponent, ChartComponent, CardComponent],
  templateUrl: './team-status.component.html',
  styleUrl: './team-status.component.css'
})
export class TeamStatusComponent {
  activeTab: 'table' | 'chart' = 'chart';

  chartType = 'bar'; // <-- Set chart type to horizontal bar
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
      label: 'Jul-12-2025',
      icon: 'icon-calendar',
      targetId: 'DateRangePicker',
      action: () => this.onDateRangeClick()
    }
  ];

  chartTabs = [
    {
      name: 'Team-wise Lead Distribution',
      data: [
        { name: 'Sales', y: 15, color: '#cceeff' },
        { name: 'Customer Success', y: 12, color: '#c7eed8' },
        { name: 'Marketing', y: 10, color: '#e2c4f6' },
        { name: 'Technical Support', y: 8, color: '#ffd98a' },
        { name: 'Product Development', y: 6, color: '#f4b6b6' }
      ]
    }
  ];

  tableData = this.chartTabs[0].data.map(item => ({
    team: item.name,
    leads: item.y
  }));

  setActiveTab(tab: 'table' | 'chart') {
    this.activeTab = tab;
  }
}
