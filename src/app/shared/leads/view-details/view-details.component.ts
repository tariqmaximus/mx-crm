import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  @Input() lead: any;
  isEditing = false;
  isDeleting = false; // 👈 Add this line
  // Dropdown data
  designations = ['SEO Lead', 'Creative Lead', 'SMM Lead', 'Frontend Lead', 'Backend Lead'];
  statuses = ['Active', 'Inactive', 'On-Leave'];
  teamMembers = ['Adeel Khan', 'Maria Ali', 'Ali Raza', 'Sana Amjad'];
  sources = ['LinkedIn', 'Referral', 'Website', 'Cold Call'];

  ngOnInit(): void {
    if (!this.lead) {
      this.lead = {
        code: "HS",
        details: "Hashim Saleem",
        designation: "SEO Lead",
        roleClass: "primary round-lg",
        tagClass: "primary",
        joinedDate: "2022-01-15",
        email: "hashim@example.com",
        phone: "+1234567890",
        company: "MaxRemind Inc.",
        status: "Active",
        statusClass: "success",
        assignedTo: "Adeel Khan",
        interestedServices: "SEO, SMM, PPC",
        followUpDate: "2025-06-10",
        location: "New York, USA",
        notes: "Interested in full-service digital marketing",
        linkedin: "https://linkedin.com/in/hashimsaleem",
        source: "LinkedIn",
        score: 85
      };
    }
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }
deleteLead() {
  if (confirm("Are you sure you want to delete this lead?")) {
    console.log("Lead deleted:", this.lead);
    // Implement API or close modal logic here
  }
}
  getStatusClass(status: string): string {
    switch (status) {
      case 'Active': return 'success';
      case 'Inactive': return 'secondary';
      case 'On-Leave': return 'warning text-dark';
      default: return 'muted';
    }
  }

  saveChanges() {
    this.lead.statusClass = this.getStatusClass(this.lead.status);
    console.log('Lead updated:', this.lead);
    this.isEditing = false;
  }
}
