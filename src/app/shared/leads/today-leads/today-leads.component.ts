import { Component } from '@angular/core';
import { MetricsGridComponent } from 'metrics-grid';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../../common/modal/modal.service';
import { DatePickerComponent } from '../../../common/date-picker/date-picker.component';
@Component({
  selector: 'today-leads',
  imports: [CommonModule, MetricsGridComponent, ],
  templateUrl: './today-leads.component.html',
  styleUrl: './today-leads.component.css'
})
export class TodayLeadsComponent  {
  
  todayLeads = [
    {
      mediaTile: '',
       source: 'Web base',
        name: 'Jason',
        status: 'lost',
      },
      {
      mediaTile: 'assets/dp1.jpg',
       source: 'Web base',
        name: 'Jason',
        status: 'lost',
      },
      {
      mediaTile: 'assets/dp1.jpg',
       source: 'Web base',
        name: 'Jason',
        status: 'confirmed',
      },
  ];
     constructor(private modalService: ModalService) {}

onDateRangeClick() {
  this.modalService.openDynamicModal(
    'Select Date Range',     // Modal Title
    'Apply',                 // Save Button Label
    'DateRangePicker',       // Modal ID or Type
    DatePickerComponent,     // Component to load inside modal
    'modal-sm'               // Modal size (optional: '', 'modal-sm', 'modal-lg', 'modal-xl')
  );
}

  headerButtons = [
    { 
      label: '24 feb 2025', 
      icon: 'icon-calendar', 
      targetId: 'DateRangePicker', 
      action: () => this.onDateRangeClick() 
    }
  ];
 actionButtons=[
        {
      label: 'Assign To',
      tooltip: 'Assign To',
      className: 'dropdown',
      isDropdown: true,
      options: ['John', 'Ali', 'Sophia', 'Michael', 'Emma', 'Zain', 'Lily']
    },
    { label: '', icon: 'icon-edit', tooltip: 'Customize',  },
    ];

 
}
