import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'add-attachment',
  standalone: true,
  imports: [CommonModule], // ✅ Add this
  templateUrl: './add-attachment.component.html',
  styleUrls: ['./add-attachment.component.css']
})
export class AddAttachmentComponent {
  fileName: string = '';
}
