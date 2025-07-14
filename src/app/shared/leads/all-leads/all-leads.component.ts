import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetricsGridComponent } from 'metrics-grid';

@Component({
  selector: 'all-leads',
  standalone: true,
  imports: [CommonModule, MetricsGridComponent],
  templateUrl: './all-leads.component.html',
  styleUrls: ['./all-leads.component.css']
})
export class AllLeadsComponent {
 

  tableConfig = {

  data:[
// START OF 50 DUMMY LEADS
{
  mediaTile: 'assets/dp1.jpg',
  name: 'Brandon Mcgee',
  source: 'Website',
  email: 'joshuacollins@hotmail.com',
  phone: '001-189-115-9038x67576',
  organization: 'BrightFuture',
  status: 'archived',
  assign: 'Emma',
  tags: 'Support, App Dev',
  date: '2025-02-12'
  
},
  {
    mediaTile: 'assets/dp2.jpg',
    name: 'Nicole Bond',
    source: 'LinkedIn',
    email: 'kelly80@hotmail.com',
    phone: '302.875.6860x7837',
    organization: 'EcoSolutions',
    status: 'archived',
    assign: 'Michael',
    tags: 'CRM, Development',
    date: '2025-01-02'
  },
  {
    mediaTile: 'assets/dp3.jpg',
    name: 'Darryl Moran',
    source: 'Website',
    email: 'mary78@yahoo.com',
    phone: '1757237165',
    organization: 'InnoHub',
    status: 'active',
    assign: 'Emma',
    tags: 'App Dev, Marketing',
    date: '2025-02-08'
  },
  {
    mediaTile: 'assets/dp4.jpg',
    name: 'Ronald Roth',
    source: 'Website',
    email: 'bwalters@hotmail.com',
    phone: '001-633-626-1002x496',
    organization: 'NextGen',
    status: 'lost',
    assign: 'Lily',
    tags: 'Development, SMM',
    date: '2025-02-05'
  },
  {
    mediaTile: 'assets/dp5.jpg',
    name: 'Robert Harris',
    source: 'Instagram',
    email: 'antoniomoss@wilson.org',
    phone: '6957607961',
    organization: 'NextGen',
    status: 'active',
    assign: 'John',
    tags: 'UI/UX, Support',
    date: '2025-02-09'
  },

]
};
actionButtons = [
  {
    label: 'Dropdown',
    tooltip: 'Dropdown for table',
    className: 'success',
    isDropdown: true,
    options: ['lead board', 'Actives', 'scheduled'],
    dropdownAction: (option: string, row: any) => {
      console.log('Dropdown action:', option, row);
    }
  },
  {
    label: 'Delete',
    tooltip: 'Delete Lead',
    className: 'danger',
    action: (row: any) => {
      console.log('Delete clicked:', row);
    }
  }
];
}
