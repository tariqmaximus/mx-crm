import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule], // ✅ Ensures ngIf and ngFor work
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title?: string;
  @Input() icon?: string;
  @Input() showHeader: boolean = true;
  @Input() showActions: boolean = true;

  @Input() actionButtons: { icon: string, handler: () => void }[] = [];
  @Input() refreshButtons: { icon: string, handler: () => void }[] = []; // ✅ Fixed capitalization
  @Input() filterButtons: { icon: string, handler: () => void }[] = [];
}
