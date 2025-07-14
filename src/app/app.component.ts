import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { ModalComponent } from "./common/modal/modal.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomeComponent, ModalComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {

}
