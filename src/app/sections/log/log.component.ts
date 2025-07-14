import { Component } from '@angular/core';
import { CardComponent } from "../../common/card/card.component";
import { MetricsGridComponent } from '../../test-lib/metrics-grid/metrics-grid.component';


@Component({
  selector: 'app-log',
  imports: [CardComponent, MetricsGridComponent],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {
  activities = [
    {
      timestamp: '2025-03-24 10:45:32',
      activityType: 'User Update',
      description: 'Updated profile details',
      performedBy: 'Alice Johnson'
    },
    {
      timestamp: '2025-03-24 09:20:14',
      activityType: 'Password Change',
      description: 'Changed account password',
      performedBy: 'Bob Smith'
    },
    {
      timestamp: '2025-03-23 17:08:55',
      activityType: 'File Upload',
      description: 'Uploaded Q1 financial report',
      performedBy: 'Charlie White'
    },
    {
      timestamp: '2025-03-23 11:33:42',
      activityType: 'Role Assignment',
      description: 'Assigned admin role to user',
      performedBy: 'Dana Gray'
    },
    {
      timestamp: '2025-03-22 15:59:07',
      activityType: 'Data Export',
      description: 'Exported user data to CSV',
      performedBy: 'Eve Brooks'
    }
  ];
  loginLogs = [
    {
      timestamp: '2025-03-24 10:15:12',
      user: 'Alice Johnson',
      ipAddress: '192.168.1.10',
      status: 'Success'
    },
    {
      timestamp: '2025-03-24 09:45:30',
      user: 'Bob Smith',
      ipAddress: '192.168.1.11',
      status: 'Failed'
    },
    {
      timestamp: '2025-03-23 18:12:47',
      user: 'Charlie White',
      ipAddress: '192.168.1.12',
      status: 'Success'
    },
    {
      timestamp: '2025-03-23 13:28:05',
      user: 'Dana Gray',
      ipAddress: '192.168.1.13',
      status: 'Success'
    },
    {
      timestamp: '2025-03-22 16:50:21',
      user: 'Eve Brooks',
      ipAddress: '192.168.1.14',
      status: 'Failed'
    }
  ];

  actionButtons = [
    {
      label: 'View',
      tooltip: 'View',
      
    }
  ];


}
