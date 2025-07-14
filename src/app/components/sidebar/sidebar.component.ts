import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule, ], 
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SideBarComponent implements OnInit {
  activeTab: string = 'home'; // Default active tab
  selectedTabTitle: String = 'Home';


  @Output() titleChange = new EventEmitter<string>();


  ngOnInit(): void {
      this.titleChange.emit(this.selectedTabTitle.toString())
  }
  titles: { [key: string]: string } = {
    home: "Home",
    visits: "Visits",
    "lab-summary": "Lab Summary",
    messages: "Messages",
    profile: "Profile",
    log: "Log"
  };

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    this.selectedTabTitle = this.titles[tab];
    this.titleChange.emit(this.selectedTabTitle.toString())
  }
}
