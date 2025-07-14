import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, CanvasJSAngularChartsModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() tabs: any[] = [];
  @Input() tabShow: boolean = true;
  @Input() chartType: string = 'line';
  @Input() width: string = '100%';
  @Input() height: string = '300px';
  activeTab: any = null;
  chartOptions: any = null;
  tabColors: { [key: string]: string } = {};

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    const allowedTypes = ['line', 'area', 'column', 'bar', 'pie', 'doughnut'];
    if (!allowedTypes.includes(this.chartType)) {
      this.chartType = 'line';
    }

    if (this.tabs?.length > 0) {
      this.activeTab = this.tabs[0];
      setTimeout(() => {
        if (this.tabShow) {
          this.chartOptions = this.getChartOptions(this.activeTab);
          this.initializeTabColors();
        } else {
          this.chartOptions = this.getCombinedChartOptions();
        }
        this.cdRef.detectChanges();
      });
    } else {
      this.chartOptions = { animationEnabled: true, data: [] };
      this.cdRef.detectChanges();
    }
  }

  initializeTabColors() {
    this.tabs.forEach(tab => {
      this.tabColors[tab.name] = this.getButtonColor(tab);
    });
  }

  selectTab(tab: any) {
    this.activeTab = tab;
    this.chartOptions = this.getChartOptions(tab);
  }

  getChartOptions(selectedTab: any) {
    return {
      animationEnabled: true,
      theme: 'light2',
      backgroundColor: 'transparent',
      width: this.parseDimension(this.width),
      height: this.parseDimension(this.height),
      axisX: {
        interval: 1
      },
      axisY: {
        labelFontSize: 14
      },
      data: [
        {
          type: this.chartType,
          showInLegend: true,
          name: selectedTab.name,
          indexLabel: null, // ✅ Hides data labels
          dataPoints: selectedTab.data.map((item: any) => ({
            label: item.name,
            y: item.y,
            color: item.color
          }))
        }
      ]
    };
  }

  getCombinedChartOptions() {
    return {
      animationEnabled: true,
      theme: 'light2',
      backgroundColor: 'transparent',
      width: this.parseDimension(this.width),
      height: this.parseDimension(this.height),
      axisX: {
        interval: 1
      },
      axisY: {
        labelFontSize: 14
      },
      data: this.tabs.map(tab => ({
        type: this.chartType,
        showInLegend: true,
        name: tab.name,
        indexLabel: null, // ✅ Hides data labels
        dataPoints: tab.data.map((item: any) => ({
          label: item.name,
          y: item.y,
          color: item.color
        }))
      }))
    };
  }

  getButtonColor(tab: any): string {
    const lastValue = tab.data[tab.data.length - 1]?.y;
    if (tab.name === 'Lost Leads') return lastValue > 5 ? 'danger' : 'normal';
    if (tab.name === 'Won Leads') return lastValue >= 15 ? 'success' : 'normal';
    return 'low';
  }

  getLatestValue(tab: any): number {
    return tab.data[tab.data.length - 1]?.y;
  }

  private parseDimension(value: string): number | undefined {
    if (value.includes('%')) {
      return undefined;
    }
    return parseInt(value, 10);
  }
}
