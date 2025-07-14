import { Component, Input } from '@angular/core';
import { IconComponent } from "../../common/users/icon.component";
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../common/card/card.component";

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
  imports: [IconComponent, CommonModule, CardComponent,]
})
export class ProfileCardComponent {
  isImageAvailable: boolean = true;
  ImagePath: string = 'assets/dp.jpg';
  handleImageError() {
    this.isImageAvailable = false;
  }
  @Input() name: string = 'Inferno Bosco';
  @Input() pid: string = '#4274';
  @Input() phone: string = '123456987';
  @Input() age: string = '84y 9m 5d';
  @Input() gender: string = 'Male';
  @Input() dob: string = 'Mar 29, 1940';
  @Input() address: string = '1234 Test Avenue, Lowell MA, 01854';
}
