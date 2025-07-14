import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticComponent {
  stats = [
    { label: 'Total Revenue', value: '$120,000', color: 'pending', icon: 'dollar' },
    { label: 'Open Invoices', value: '14', color: 'info', icon: 'invoice-fill' },
    { label: 'Lost Deals', value: '6', color: 'warning', icon: 'lostdeal' },
    { label: 'Won Deals', value: '18', color: 'success', icon: 'barganing' },
  ];
}