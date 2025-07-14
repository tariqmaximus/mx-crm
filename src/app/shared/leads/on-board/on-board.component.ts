import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../../common/modal/modal.service';

import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

import { ProgressRingComponent } from '../../../common/charts/progress-ring/progress-ring.component';
import { ViewDetailsComponent } from '../view-details/view-details.component';
import { AddBoardComponent } from '../../../forms/add-board/add-board.component';
import { AddLeadComponent } from '../../../forms/add-lead/add-lead.component';


@Component({
  selector: 'on-board',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,

    ProgressRingComponent
  ],
  templateUrl: './on-board.component.html',
  styleUrl: './on-board.component.css'
})
export class OnBoardComponent implements OnInit {
  connectedLists: string[] = [];
  isCollapsed: boolean = false;

  // Status filter options
  statusOptions: string[] = ['All', 'won rate', 'inprogress', 'pending', 'completed', 'lost', 'active', 'inactive', 'rejected', 'confirmed', 'converted', 'cancelled', 'scheduled'];

  // Store original leads for filtering reset
  originalLeads: any[] = [];

  // Dynamic percentage filter per process
  onStatusFilterChange(process: any, processIndex: number, selectedStatus: string): void {
    if (!this.originalLeads[processIndex]) {
      this.originalLeads[processIndex] = [...process.leads];
    }

    const allLeads = this.originalLeads[processIndex];

    if (selectedStatus === 'All') {
      process.leads = [...allLeads];
    } else {
      process.leads = allLeads.filter((lead: any) =>
        lead.status.toLowerCase().replace(/\s/g, '') === selectedStatus.toLowerCase().replace(/\s/g, '')
      );
    }

    const percentage = allLeads.length
      ? Math.round((process.leads.length / allLeads.length) * 100)
      : 0;

    this.allBoards[processIndex].percentage = percentage;
  }

  toggleCard() {
    this.isCollapsed = !this.isCollapsed;
  }

  openCard() {
    this.isCollapsed = false;
  }

  onViewDetails() {
    this.modalService.openDynamicModal(
      'View Details',
      'Save',
      'Enter Lead Info',
      ViewDetailsComponent,
      'modal-lg'
    );
  }

  onLeadDrop(event: CdkDragDrop<any[]>, processIndex: number): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.allBoards[processIndex].leads, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  allBoards = [
    {
      name: 'Marketing',
      sub: 'Lost',
      percentage: 0,
    leads: [
      {
        code: 'MH',
        details: 'Umar Nawaz',
        type: 'Content Lead',
        roleClass: 'info round-lg',
        tagClass: 'info',
        status: 'rejected',
        statusClass: 'danger',
        joinedDate: '2024-08-08'
      },
      {
        code: 'LD',
        details: 'Ali Iqbal',
        type: 'Issue Handler',
        roleClass: 'danger round-lg',
        tagClass: 'danger',
        status: 'closed',
        statusClass: 'secondary',
        joinedDate: '2024-05-25'
      },
      {
        code: 'SZ',
        details: 'Ali Latif',
        type: 'Complaint Manager',
        roleClass: 'info round-lg',
        tagClass: 'info',
        status: 'lost',
        statusClass: 'danger',
        joinedDate: '2024-06-27'
      },
      {
        code: 'SP',
        details: 'Ali Zubair',
        type: 'Sales Rep',
        roleClass: 'warning round-lg',
        tagClass: 'warning',
        status: 'cancelled',
        statusClass: 'danger',
        joinedDate: '2021-10-09'
      },
      {
        code: 'MV',
        details: 'Umar Iqbal',
        type: 'HR Assistant',
        roleClass: 'primary round-lg',
        tagClass: 'primary',
        status: 'pending',
        statusClass: 'warning',
        joinedDate: '2023-01-10'
      },
      {
        code: 'KC',
        details: 'Hina Zubair',
        type: 'Network Admin',
        roleClass: 'info round-lg',
        tagClass: 'info',
        status: 'inactive',
        statusClass: 'default',
        joinedDate: '2023-07-01'
      },
      {
        code: 'ES',
        details: 'Ali Ahmed',
        type: 'Content Lead',
        roleClass: 'info round-lg',
        tagClass: 'info',
        status: 'scheduled',
        statusClass: 'success',
        joinedDate: '2023-08-16'
      },
      {
        code: 'QC',
        details: 'Rabia Nawaz',
        type: 'Sales Rep',
        roleClass: 'warning round-lg',
        tagClass: 'warning',
        status: 'converted',
        statusClass: 'success',
        joinedDate: '2021-08-02'
      },
      {
        code: 'HA',
        details: 'Kashif Iqbal',
        type: 'IT Support',
        roleClass: 'danger round-lg',
        tagClass: 'danger',
        status: 'active',
        statusClass: 'success',
        joinedDate: '2023-10-23'
      },
      {
        code: 'JL',
        details: 'Zain Zubair',
        type: 'Backend',
        roleClass: 'success round-lg',
        tagClass: 'success',
        status: 'lost',
        statusClass: 'danger',
        joinedDate: '2024-01-29'
      },
      {
        code: 'NO',
        details: 'Tariq Zubair',
        type: 'Issue Handler',
        roleClass: 'danger round-lg',
        tagClass: 'danger',
        status: 'won rate',
        statusClass: 'success',
        joinedDate: '2023-09-01'
      },
     
    ]
    },
    {
      name: 'Development',
      sub: 'In Progress',
      percentage: 50,
     leads: [
      {
        code: 'MH',
        details: 'Umar Nawaz',
        type: 'Content Lead',
        roleClass: 'info round-lg',
        tagClass: 'info',
        status: 'rejected',
        statusClass: 'danger',
        joinedDate: '2024-08-08'
      },
      {
        code: 'LD',
        details: 'Ali Iqbal',
        type: 'Issue Handler',
        roleClass: 'danger round-lg',
        tagClass: 'danger',
        status: 'closed',
        statusClass: 'secondary',
        joinedDate: '2024-05-25'
      },
      {
        code: 'SZ',
        details: 'Ali Latif',
        type: 'Complaint Manager',
        roleClass: 'info round-lg',
        tagClass: 'info',
        status: 'lost',
        statusClass: 'danger',
        joinedDate: '2024-06-27'
      },
      {
        code: 'SP',
        details: 'Ali Zubair',
        type: 'Sales Rep',
        roleClass: 'warning round-lg',
        tagClass: 'warning',
        status: 'cancelled',
        statusClass: 'danger',
        joinedDate: '2021-10-09'
      },
      {
        code: 'MV',
        details: 'Umar Iqbal',
        type: 'HR Assistant',
        roleClass: 'primary round-lg',
        tagClass: 'primary',
        status: 'pending',
        statusClass: 'warning',
        joinedDate: '2023-01-10'
      },
      {
        code: 'KC',
        details: 'Hina Zubair',
        type: 'Network Admin',
        roleClass: 'info round-lg',
        tagClass: 'info',
        status: 'inactive',
        statusClass: 'default',
        joinedDate: '2023-07-01'
      },
      {
        code: 'ES',
        details: 'Ali Ahmed',
        type: 'Content Lead',
        roleClass: 'info round-lg',
        tagClass: 'info',
        status: 'scheduled',
        statusClass: 'success',
        joinedDate: '2023-08-16'
      },
      {
        code: 'QC',
        details: 'Rabia Nawaz',
        type: 'Sales Rep',
        roleClass: 'warning round-lg',
        tagClass: 'warning',
        status: 'converted',
        statusClass: 'success',
        joinedDate: '2021-08-02'
      },
      {
        code: 'HA',
        details: 'Kashif Iqbal',
        type: 'IT Support',
        roleClass: 'danger round-lg',
        tagClass: 'danger',
        status: 'active',
        statusClass: 'success',
        joinedDate: '2023-10-23'
      },
      {
        code: 'JL',
        details: 'Zain Zubair',
        type: 'Backend',
        roleClass: 'success round-lg',
        tagClass: 'success',
        status: 'lost',
        statusClass: 'danger',
        joinedDate: '2024-01-29'
      },
      {
        code: 'NO',
        details: 'Tariq Zubair',
        type: 'Issue Handler',
        roleClass: 'danger round-lg',
        tagClass: 'danger',
        status: 'won rate',
        statusClass: 'success',
        joinedDate: '2023-09-01'
      },
     
    ]
    },
    {
      name: 'Support',
      sub: 'Pending',
      percentage: 30,
    leads: [
      {
        code: 'MH',
        details: 'Umar Nawaz',
        type: 'Content Lead',
        roleClass: 'info round-lg',
        tagClass: 'info',
        status: 'rejected',
        statusClass: 'danger',
        joinedDate: '2024-08-08'
      },
      {
        code: 'LD',
        details: 'Ali Iqbal',
        type: 'Issue Handler',
        roleClass: 'danger round-lg',
        tagClass: 'danger',
        status: 'closed',
        statusClass: 'secondary',
        joinedDate: '2024-05-25'
      },
      {
        code: 'SZ',
        details: 'Ali Latif',
        type: 'Complaint Manager',
        roleClass: 'info round-lg',
        tagClass: 'info',
        status: 'lost',
        statusClass: 'danger',
        joinedDate: '2024-06-27'
      },
      {
        code: 'SP',
        details: 'Ali Zubair',
        type: 'Sales Rep',
        roleClass: 'warning round-lg',
        tagClass: 'warning',
        status: 'cancelled',
        statusClass: 'danger',
        joinedDate: '2021-10-09'
      },
      {
        code: 'MV',
        details: 'Umar Iqbal',
        type: 'HR Assistant',
        roleClass: 'primary round-lg',
        tagClass: 'primary',
        status: 'pending',
        statusClass: 'warning',
        joinedDate: '2023-01-10'
      },
      {
        code: 'KC',
        details: 'Hina Zubair',
        type: 'Network Admin',
        roleClass: 'info round-lg',
        tagClass: 'info',
        status: 'inactive',
        statusClass: 'default',
        joinedDate: '2023-07-01'
      },
      {
        code: 'ES',
        details: 'Ali Ahmed',
        type: 'Content Lead',
        roleClass: 'info round-lg',
        tagClass: 'info',
        status: 'scheduled',
        statusClass: 'success',
        joinedDate: '2023-08-16'
      },
      {
        code: 'QC',
        details: 'Rabia Nawaz',
        type: 'Sales Rep',
        roleClass: 'warning round-lg',
        tagClass: 'warning',
        status: 'converted',
        statusClass: 'success',
        joinedDate: '2021-08-02'
      },
      {
        code: 'HA',
        details: 'Kashif Iqbal',
        type: 'IT Support',
        roleClass: 'danger round-lg',
        tagClass: 'danger',
        status: 'active',
        statusClass: 'success',
        joinedDate: '2023-10-23'
      },
      {
        code: 'JL',
        details: 'Zain Zubair',
        type: 'Backend',
        roleClass: 'success round-lg',
        tagClass: 'success',
        status: 'lost',
        statusClass: 'danger',
        joinedDate: '2024-01-29'
      },
      {
        code: 'NO',
        details: 'Tariq Zubair',
        type: 'Issue Handler',
        roleClass: 'danger round-lg',
        tagClass: 'danger',
        status: 'won rate',
        statusClass: 'success',
        joinedDate: '2023-09-01'
      },
     
    ]
    },
      {
      name: 'Sales',
      sub: 'Pending',
      percentage: 30,
    leads: [
      {
        code: 'MH',
        details: 'Umar Nawaz',
        type: 'Content Lead',
        roleClass: 'info round-lg',
        tagClass: 'info',
        status: 'rejected',
        statusClass: 'danger',
        joinedDate: '2024-08-08'
      },
      {
        code: 'LD',
        details: 'Ali Iqbal',
        type: 'Issue Handler',
        roleClass: 'danger round-lg',
        tagClass: 'danger',
        status: 'closed',
        statusClass: 'secondary',
        joinedDate: '2024-05-25'
      },
      {
        code: 'SZ',
        details: 'Ali Latif',
        type: 'Complaint Manager',
        roleClass: 'info round-lg',
        tagClass: 'info',
        status: 'lost',
        statusClass: 'danger',
        joinedDate: '2024-06-27'
      },
      {
        code: 'SP',
        details: 'Ali Zubair',
        type: 'Sales Rep',
        roleClass: 'warning round-lg',
        tagClass: 'warning',
        status: 'cancelled',
        statusClass: 'danger',
        joinedDate: '2021-10-09'
      },
      {
        code: 'MV',
        details: 'Umar Iqbal',
        type: 'HR Assistant',
        roleClass: 'primary round-lg',
        tagClass: 'primary',
        status: 'pending',
        statusClass: 'warning',
        joinedDate: '2023-01-10'
      },
      {
        code: 'KC',
        details: 'Hina Zubair',
        type: 'Network Admin',
        roleClass: 'info round-lg',
        tagClass: 'info',
        status: 'inactive',
        statusClass: 'default',
        joinedDate: '2023-07-01'
      },
      {
        code: 'ES',
        details: 'Ali Ahmed',
        type: 'Content Lead',
        roleClass: 'info round-lg',
        tagClass: 'info',
        status: 'scheduled',
        statusClass: 'success',
        joinedDate: '2023-08-16'
      },
      {
        code: 'QC',
        details: 'Rabia Nawaz',
        type: 'Sales Rep',
        roleClass: 'warning round-lg',
        tagClass: 'warning',
        status: 'converted',
        statusClass: 'success',
        joinedDate: '2021-08-02'
      },
      {
        code: 'HA',
        details: 'Kashif Iqbal',
        type: 'IT Support',
        roleClass: 'danger round-lg',
        tagClass: 'danger',
        status: 'active',
        statusClass: 'success',
        joinedDate: '2023-10-23'
      },
      {
        code: 'JL',
        details: 'Zain Zubair',
        type: 'Backend',
        roleClass: 'success round-lg',
        tagClass: 'success',
        status: 'lost',
        statusClass: 'danger',
        joinedDate: '2024-01-29'
      },
      {
        code: 'NO',
        details: 'Tariq Zubair',
        type: 'Issue Handler',
        roleClass: 'danger round-lg',
        tagClass: 'danger',
        status: 'won rate',
        statusClass: 'success',
        joinedDate: '2023-09-01'
      },
     
    ]
    }
  ];


 constructor(private modalService: ModalService) {}
    
      onAddBoard() {
        this.modalService.openDynamicModal(
          'Add Board',
          'Apply',
          'board',
          AddBoardComponent,
          'modal-md'
        );
      }
         onAddLead() {
        this.modalService.openDynamicModal(
          'Add Lead',
          'Apply',
          'lead',
          AddLeadComponent,
          'modal-md'
        );
      }

  ngOnInit(): void {
    this.connectedLists = this.allBoards.map((_, index) => `processList-${index}`);
  }
}