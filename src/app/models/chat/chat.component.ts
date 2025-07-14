import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../common/card/card.component';

interface Message {
  sender: string;
  text: string;
  timestamp: Date;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  imports: [CommonModule, FormsModule, CardComponent],
})
export class ChatComponent implements OnChanges {
  @Input() message: any;

  messages: Message[] = [];
  newMessage: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['message'] && this.message) {
      // Load chat when new message is selected
      this.loadChatFor(this.message.name);
    }
  }

  loadChatFor(senderName: string) {
    this.messages = [
      {
        sender: senderName,
        text: 'Hello! Let me know your concerns.',
        timestamp: new Date(),
      },
    ];
    this.scrollToBottom();
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        sender: 'You',
        text: this.newMessage,
        timestamp: new Date()
      });

      const userMessage = this.newMessage.toLowerCase();
      this.newMessage = '';
      this.scrollToBottom();

      // Simulate bot reply after a short delay
      setTimeout(() => {
        this.botReply(userMessage);
        this.scrollToBottom();
      }, 1000);
    }
  }

  botReply(userMessage: string) {
    let botResponse = 'Sorry, I did not understand that.';

    if (userMessage.includes('hello') || userMessage.includes('hi')) {
      botResponse = `Hello! How can I assist you today?`;
    } else if (userMessage.includes('status')) {
      botResponse = 'event pe inamat diy gay hay';
    } else if (userMessage.includes('team')) {
      botResponse = 'hashim logo ke team 2sray number pe aye';
    } else if (userMessage.includes('pesy')) {
      botResponse = 'unay 10000 mila us me 5000 aap ka hay';
    } else if (userMessage.includes('mujay')) {
      botResponse = 'nhe aap ka 5k hay';
    }

    this.messages.push({
      sender: this.message?.name || 'Dr Maximus',
      text: botResponse,
      timestamp: new Date()
    });
  }

  scrollToBottom() {
    setTimeout(() => {
      const chatWindow = document.querySelector('.chat-window');
      if (chatWindow) {
        chatWindow.scrollTop = chatWindow.scrollHeight;
      }
    }, 100);
  }
    selectedMessage: Message | null = null;

  selectMessage(message: Message) {
    this.selectedMessage = message;
  }
   backToList() {
    this.selectedMessage = null;
  }
}
