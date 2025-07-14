import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() modalId: string = `modal-${Math.random().toString(36).substr(2, 9)}`;
  @Input() showFooter: boolean = true; // Default is true
@Input() modalSize: 'modal-sm' | 'modal-lg' | 'modal-xl' | '' = '';
  constructor(public modalService: ModalService) {}
}
