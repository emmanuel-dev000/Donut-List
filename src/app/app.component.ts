import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DonutCardComponent } from "./donut-card/donut-card.component";
import { DonutAddComponent } from "./donut-add/donut-add.component";
import { DonutService } from './donut.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DonutCardComponent, DonutAddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  activatePopup: boolean = false;

  constructor(private donutService: DonutService) {}

  get getDonuts() {
    return this.donutService.donuts;
  }

  showPopup() {
    this.activatePopup = true;
  }
  
  hidePopup() {
    this.activatePopup = false;
  }
}
