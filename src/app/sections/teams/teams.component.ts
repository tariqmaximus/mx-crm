import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../common/modal/modal.service';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { AddUserComponent } from '../../forms/add-user/add-user.component';
import { CardComponent } from "../../common/card/card.component";

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, CardComponent, DragDropModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent implements OnInit {
  connectedLists: string[] = [];

  designationOptions: string[] = [
    "SEO Expert",
    "CEO",
    "Manager",
    "Developer",
    "Ui Expart",
    "Brand Manager",
    "Analyst",
    "PR Executive"
  ];

  roleOptions: string[] = [
    "Editer",
    "other",
    "admin",
    "absurver"
  ];

  controlOptions: string[] = [
    "Remove User",
    "Instent logout",
    "Edit user"
  ];

  allTeams = [
    {
      name: 'Dev Squad',
      members: Array.from({ length: 12 }, (_, i) => ({
        code: `A${i + 1}`,
        details: `Alpha Member ${i + 1}`,
        role: this.roleOptions[i % this.roleOptions.length],
        designation: this.designationOptions[i % this.designationOptions.length],
        roleClass: 'primary round-lg',
        tagClass: 'primary'
      }))
    },
    {
      name: 'Byte Forge',
      members: Array.from({ length: 10 }, (_, i) => ({
        code: `B${i + 1}`,
        details: `Beta Member ${i + 1}`,
        role: this.roleOptions[(i + 1) % this.roleOptions.length],
        designation: this.designationOptions[(i + 2) % this.designationOptions.length],
        roleClass: 'info round-lg',
        tagClass: 'info'
      }))
    },
    {
      name: 'Care Command',
      members: Array.from({ length: 14 }, (_, i) => ({
        code: `G${i + 1}`,
        details: `Gamma Member ${i + 1}`,
        role: this.roleOptions[(i + 2) % this.roleOptions.length],
        designation: this.designationOptions[(i + 3) % this.designationOptions.length],
        roleClass: 'danger round-lg',
        tagClass: 'danger'
      }))
    }
  ];

  headerButtons = [
    {
      label: 'Add User',
      icon: 'icon-add',
      targetId: 'add',
      action: () => this.onAddLead()
    }
  ];

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.connectedLists = this.allTeams.map((_, index) => `teamList-${index}`);
  }

  onAddLead() {
    this.modalService.openDynamicModal(
      'Add new User',
      'Apply',
      'le',
      AddUserComponent,
      'modal-md'
    );
  }

  onMemberDrop(event: CdkDragDrop<any[]>, teamIndex: number): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.allTeams[teamIndex].members, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
