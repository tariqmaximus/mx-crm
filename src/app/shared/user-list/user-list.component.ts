import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../common/card/card.component";
import { ModalService } from '../../common/modal/modal.service';
import { AddUserComponent } from '../../forms/add-user/add-user.component';




@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  AppUsers = [
      { code: "AM", details: "Mr. Abdul Muqeet", digination: "CEO", roleClass: 'primary round-lg ' },
    { code: "HS", details: "Hashim Saleem", digination: "Office boy", roleClass: 'primary round-lg ' },
    { code: "SK", details: "Tariq Mehmood", digination: "designer", roleClass: 'danger round-lg'  },
    { code: "TJ", details: "Shahrukh Saleem", digination: "Manger", roleClass: 'info round-lg'  },
      
  
  ];

  headerButtons = [

      {
      label: 'Add User',
      icon: 'icon-add',
      targetId: 'add',
      action: () => this.onAddLead()
    },
    
  ];
    constructor(private modalService: ModalService) {}
  
    onAddLead() {
      this.modalService.openDynamicModal(
        'Add new User',
        'Apply',
        'lead',
        AddUserComponent,
        'modal-md'
      );
    }
}
