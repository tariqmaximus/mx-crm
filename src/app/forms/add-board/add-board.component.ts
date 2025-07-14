import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-board',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.css']
})
export class AddBoardComponent {
  boardData = {
    name: '',
    category: ''
  };

  @Output() boardAdded = new EventEmitter<any>();

  onSubmit() {
    const { name, category } = this.boardData;

    if (!name || !category) {
      alert("Please fill in all fields");
      return;
    }

    this.boardAdded.emit(this.boardData);
    this.clearForm();
  }

  clearForm() {
    this.boardData = {
      name: '',
      category: ''
    };
  }

  onCancel() {
    // Optional: emit event or close modal from here if handled externally
    this.clearForm();
  }
}
