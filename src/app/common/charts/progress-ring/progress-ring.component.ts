import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-ring',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-ring.component.html',
  styleUrls: ['./progress-ring.component.css']
})
export class ProgressRingComponent {
  @Input() percentage: number = 50;

  get strokeColor(): string {
    if (this.percentage >= 75) return '#28a745'; // green
    if (this.percentage >= 50) return '#ffc107'; // yellow
    if (this.percentage >= 25) return '#fd7e14'; // orange
    return '#dc3545'; // red
  }
}
