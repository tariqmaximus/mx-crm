// icon.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <i [class]="iconClass">
      <span *ngFor="let i of paths" [class]="'path' + i"></span>
    </i>
  `,
  styles: []
})
export class IconComponent {
  @Input() type: 'admin-male' | 'admin-female' | 'doctor-male' | 'doctor-female' | 'user-male' | 'user-female' | 'user-boy' | 'user-girl' = 'user-male';

  get iconClass(): string {
    return `icon-${this.type}`;
  }

  get paths(): number[] {
    switch (this.type) {
      case 'admin-male':
        return Array.from({ length: 17 }, (_, i) => i + 1);
      case 'admin-female':
        return Array.from({ length: 8 }, (_, i) => i + 1);
      case 'doctor-male':
        return Array.from({ length: 31 }, (_, i) => i + 1);
      case 'doctor-female':
        return Array.from({ length: 18 }, (_, i) => i + 1);
      case 'user-male':
        return Array.from({ length: 20 }, (_, i) => i + 1);
      case 'user-female':
        return Array.from({ length: 19 }, (_, i) => i + 1);
      case 'user-boy':
        return Array.from({ length: 33 }, (_, i) => i + 1);
      case 'user-girl':
        return Array.from({ length: 20 }, (_, i) => i + 1);
      default:
        return [];
    }
  }
}
