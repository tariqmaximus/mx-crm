import { Component } from '@angular/core';
import { ProfileCardComponent } from "../../shared/profile-card/profile-card.component";

import { UserListComponent } from "../../shared/user-list/user-list.component";


@Component({
  selector: 'app-profile',
  imports: [ProfileCardComponent,  UserListComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
