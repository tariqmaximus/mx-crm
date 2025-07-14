import { Component } from '@angular/core';



@Component({
  selector: 'app-fm-encounters-print',

  templateUrl: './fm-encounters-print.component.html',
  styleUrls: ['./fm-encounters-print.component.css']
})
export class FmEncountersPrintComponent {
  printPage() {
    window.print(); // 🔥 Opens print page in browser
  }
}

