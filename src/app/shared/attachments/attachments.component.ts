import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../common/card/card.component";


@Component({
  selector: 'app-attachments',
  standalone: true,
  imports: [CommonModule, CardComponent,],
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css'],
})
export class AttachmentsComponent {
  attachments: { name: string; type: string }[] = [
    { name: 'Hello.pdf', type: 'pdf' },
    { name: 'Image.jpg', type: 'jpg' },
    { name: 'Document.docx', type: 'doc' }
  ];
}
