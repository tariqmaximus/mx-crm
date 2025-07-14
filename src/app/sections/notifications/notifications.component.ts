import { Component } from '@angular/core';

import { CardComponent } from "../../common/card/card.component";
import { MetricsGridComponent } from '../../services/metrics-grid/lib/metrics-grid.component';

@Component({
  selector: 'app-notifications',
  imports: [MetricsGridComponent, CardComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  notifications = [
    {
      profilePicture: 'https://i.pravatar.cc/40?img=1',
      title: 'New Comment',
      message: 'You have a new comment on your post.',
      date: '2025-03-25',
      time: '10:30 AM',
      read: 'Unread'
    },
    {
      profilePicture: 'https://i.pravatar.cc/40?img=2',
      title: 'System Alert',
      message: 'Your password will expire in 3 days.',
      date: '2025-03-24',
      time: '09:00 AM',
      read: 'Read'
    },
    {
      profilePicture: 'https://i.pravatar.cc/40?img=3',
      title: 'New Follower',
      message: 'Alice started following you.',
      date: '2025-03-23',
      time: '02:45 PM',
      read: 'Unread'
    }
  ];
   
  
 
  
    /** ✅ Fix: Ensure Correct Property Name */
    actionButtons = [
      {
        label: 'Book',
        tooltip: 'Book an Appointment',
        
      }
    ];
}
