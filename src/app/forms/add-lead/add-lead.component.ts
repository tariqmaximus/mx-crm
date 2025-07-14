import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'add-lead',
  standalone: true,
  imports: [CommonModule], // ✅ Add this
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.css']
})
export class AddLeadComponent {

  fileName: string | null = null;

onFileSelected(event: any): void {
  const file = event.target.files[0];
  if (file) {
    this.fileName = file.name;
  }
}
}
