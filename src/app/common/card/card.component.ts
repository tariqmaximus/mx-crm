import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CardButton {
  label?: string;
  icon?: string;
  targetId: string;
  action?: () => void; // Optional action for each button
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() variant: string = ''; // default fallback class
  @Input() title?: string;
    @Input() sub?: string;
  @Input() icon?: string;
  @Input() showHeader: boolean = true;
  @Input() showFooter: boolean = false;
  @Input() headerButtons: CardButton[] = [];
  @Input() collapsible: boolean = false; // Enable or disable collapsing

isCollapsed: boolean = false;

toggleCard() {
  if (this.collapsible) {
    this.isCollapsed = !this.isCollapsed;
  }
}

openCard() {
  if (this.collapsible) {
    this.isCollapsed = false;
  }
}


  executeAction(button: CardButton) {
    if (button.action) {
      button.action();
    } else {
      console.warn(`No action defined for button with targetId: ${button.targetId}`);
    }
  }
}
