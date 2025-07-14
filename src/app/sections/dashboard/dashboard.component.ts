import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from "../../common/statistics/statistics.component";
import { TaskStatusComponent } from "../../shared/status/task-status/task-status.component";
import { TodayLeadsComponent } from "../../shared/leads/today-leads/today-leads.component";
import { AllLeadsComponent } from "../../shared/leads/all-leads/all-leads.component";
import { UserListComponent } from "../../shared/user-list/user-list.component";

import { TeamStatusComponent } from "../../shared/status/team-status/team-status.component";
import { RevenueStatusComponent } from "../../shared/status/revenue-status/revenue-status.component";
import { CardComponent } from "../../common/card/card.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    StatisticComponent,
    AllLeadsComponent,
    TodayLeadsComponent,
    UserListComponent,
    TaskStatusComponent,
    TeamStatusComponent,
    RevenueStatusComponent,
    CardComponent
],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  page = { title: 'Dashboard' }; // Default title






}
