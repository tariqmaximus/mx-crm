import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../common/users/icon.component';
import { ChatComponent } from '../../models/chat/chat.component';


type UserIconType =
  | 'admin-male'
  | 'admin-female'
  | 'doctor-male'
  | 'doctor-female'
  | 'user-female'
  | 'user-male'
  | 'user-girl'
  | 'user-boy';

interface Message {
  name: string;
  message: string;
  date: string;
  iconType: UserIconType;
  status: 'read' | 'unread';
}

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [CommonModule, IconComponent, ChatComponent],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css',
})
export class InboxComponent {
  messagesList: Message[] = [
    {
      name: 'Dr John Smith',
      message: 'Manic episode without psychotic symptoms, unspecified',
      date: '03/10/2025',
      iconType: 'admin-male',
      status: 'read'
    },
    {
      name: 'Dr Jane Doe',
      message: 'Severe depressive episode without psychotic symptoms',
      date: '03/12/2025',
      iconType: 'admin-female',
      status: 'unread'
    },
    {
      name: 'Dr Alan Grant',
      message: 'Generalized anxiety disorder with panic attacks',
      date: '03/13/2025',
      iconType: 'admin-male',
      status: 'read'
    },
    {
      name: 'Dr Ellie Sattler',
      message: 'Obsessive-compulsive disorder, recurrent episodes',
      date: '03/14/2025',
      iconType: 'admin-female',
      status: 'unread'
    },
    {
      name: 'Dr Ian Malcolm',
      message: 'Bipolar affective disorder, current episode manic',
      date: '03/15/2025',
      iconType: 'admin-male',
      status: 'read'
    },
    {
      name: 'Dr Sarah Harding',
      message: 'Moderate depressive episode with somatic syndrome',
      date: '03/16/2025',
      iconType: 'admin-female',
      status: 'unread'
    },
    {
      name: 'Dr Henry Wu',
      message: 'Acute stress reaction due to traumatic event',
      date: '03/17/2025',
      iconType: 'admin-male',
      status: 'read'
    },
    {
      name: 'Dr Laura Dern',
      message: 'Post-traumatic stress disorder with delayed onset',
      date: '03/17/2025',
      iconType: 'admin-female',
      status: 'unread'
    },
    {
      name: 'Dr Malcolm Reynolds',
      message: 'Adjustment disorder with mixed anxiety and depression',
      date: '03/18/2025',
      iconType: 'admin-male',
      status: 'read'
    },
    {
      name: 'Dr Zoe Washburne',
      message: 'Mild cognitive impairment, suspected early onset dementia',
      date: '03/18/2025',
      iconType: 'admin-female',
      status: 'unread'
    }
  ];
  

  selectedMessage: Message | null = null;

  selectMessage(message: Message) {
    this.selectedMessage = message;
  }

 
}
