import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css'],
  imports: [CommonModule]
})
export class TimeSlotComponent implements OnInit {
  @Input() timeSlots: string[] = [];
  @Input() selectedTime: string | null = null;
  @Output() selectedTimeChange = new EventEmitter<string>();

  ngOnInit() {
    if (this.timeSlots.length === 0) {
      this.generateDummyTimeSlots(); // Generate default time slots if none are provided
    }
  }

  generateDummyTimeSlots() {
    this.timeSlots = [
      '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM',
      '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
      '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM',
      '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
    ];
  }

  onTimeChange(time: string) {
    this.selectedTime = time;
    this.selectedTimeChange.emit(this.selectedTime);
  }
}
