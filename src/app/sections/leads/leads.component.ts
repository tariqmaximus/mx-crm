import { Component } from '@angular/core';
import { OnBoardComponent } from "../../shared/leads/on-board/on-board.component";
import { AllLeadsComponent } from "../../shared/leads/all-leads/all-leads.component";

@Component({
  selector: 'app-leads',
  imports: [OnBoardComponent, AllLeadsComponent],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.css'
})
export class LeadsComponent {

}
