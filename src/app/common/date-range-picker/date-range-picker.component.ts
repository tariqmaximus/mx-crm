import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatCalendar } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-range-picker',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatCalendar
  ],
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css']
})
export class DateRangePickerComponent {
  public selectedDuration: number = 7;
  public startDate: Date | null = null;
  public endDate: Date | null = null;

  constructor() {
    this.selectRange(7); // Default to Last Week
  }

  selectRange(days: number): void {
    const today = new Date();
    const past = new Date();
    past.setDate(today.getDate() - days);

    this.selectedDuration = days;
    this.startDate = past;
    this.endDate = today;
  }

  onStartDateChange(date: Date): void {
    this.startDate = date;
  }

  onEndDateChange(date: Date): void {
    this.endDate = date;
  }
}
