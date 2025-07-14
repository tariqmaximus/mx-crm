import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../common/users/icon.component';
import { ChatComponent } from '../../models/chat/chat.component';
import { CardComponent } from "../../common/card/card.component";
import { ProfileCardComponent } from "../../shared/profile-card/profile-card.component";

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
  imports: [CommonModule, IconComponent, ChatComponent, CardComponent, ProfileCardComponent],
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
    // Add more dummy messages...
  ];

  selectedMessage: Message | null = null;

  selectMessage(message: Message) {
    this.selectedMessage = message;
  }

  backToList() {
    this.selectedMessage = null;
  }
}
