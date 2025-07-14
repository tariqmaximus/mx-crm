// users.component.ts
import { Component } from '@angular/core';
import { IconComponent } from './icon.component';

@Component({
  selector: 'user-users',
  standalone: true,
  imports: [IconComponent],
  template: `
  <user-icon type="admin-male"></user-icon>
  <user-icon type="admin-female"></user-icon>

    
    
    <user-icon type="doctor-male"></user-icon>
    <user-icon type="doctor-female"></user-icon>

    <user-icon type="user-male"></user-icon>
    <user-icon type="user-female"></user-icon>

    <user-icon type="user-boy"></user-icon>
    <user-icon type="user-girl"></user-icon>
  `
})
export class UsersComponent {}
