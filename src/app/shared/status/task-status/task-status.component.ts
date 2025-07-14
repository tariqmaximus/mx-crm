import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsGridComponent } from '../../../test-lib/metrics-grid/metrics-grid.component';
import { ChartComponent } from '../../../common/charts/chart/chart.component';

@Component({
  selector: 'task-status',
  standalone: true,
  imports: [CommonModule, MetricsGridComponent, ChartComponent],
  templateUrl: './task-status.component.html',
  styleUrl: './task-status.component.css'
})
export class TaskStatusComponent {
  activeTab: 'table' | 'chart' = 'chart';
  chartType = 'bar';

  leads = [
    { won: 5, lost: 10, open: 50 }
  ];

  chartTabs: { name: string; data: { label: string; y: number; color: string }[] }[] = [];

  headerButtons = [
    {
      label: '',
      icon: 'icon-chart-fill',
      targetId: 'chart',
      action: () => this.setActiveTab('chart')
    },
    {
      label: '',
      icon: 'icon-table',
      targetId: 'table',
      action: () => this.setActiveTab('table')
    }
  ];

  tableData: { status: string; count: number; percentage: string }[] = [];

  constructor() {
    const totalWon = this.leads.reduce((sum, l) => sum + l.won, 0);
    const totalLost = this.leads.reduce((sum, l) => sum + l.lost, 0);
    const totalOpen = this.leads.reduce((sum, l) => sum + l.open, 0);
    const totalAll = totalWon + totalLost + totalOpen;

    this.chartTabs = [
      {
        name: 'Lead Status',
        data: [
          {
            label: 'Won Leads',
            y: totalWon,
            color: '#28a745'
          },
          {
            label: 'Lost Leads',
            y: totalLost,
            color: '#dc3545'
          },
          {
            label: 'Open Leads',
            y: totalOpen,
            color: '#ffc107'
          }
        ]
      }
    ];

    this.tableData = [
      { status: 'Won Leads', count: totalWon, percentage: ((totalWon / totalAll) * 100).toFixed(1) + '%' },
      { status: 'Lost Leads', count: totalLost, percentage: ((totalLost / totalAll) * 100).toFixed(1) + '%' },
      { status: 'Open Leads', count: totalOpen, percentage: ((totalOpen / totalAll) * 100).toFixed(1) + '%' }
    ];
  }

  setActiveTab(tab: 'table' | 'chart') {
    this.activeTab = tab;
  }
}
