import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userData = {
    name: '',
    email: '',
    role: '',
    designation: '',
    password: '',
    confirmPassword: ''
  };

  showPassword = false;
  showConfirmPassword = false;

  @Output() userAdded = new EventEmitter<any>();

  onSubmit() {
    const { name, email, role, designation, password, confirmPassword } = this.userData;
    if (name && email && role && designation && password && confirmPassword) {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      this.userAdded.emit(this.userData);
      this.clearForm();
    } else {
      alert("Please fill in all fields");
    }
  }

  clearForm() {
    this.userData = {
      name: '',
      email: '',
      role: '',
      designation: '',
      password: '',
      confirmPassword: ''
    };
    this.showPassword = false;
    this.showConfirmPassword = false;
  }
}
