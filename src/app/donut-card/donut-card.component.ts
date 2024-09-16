import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-donut-card',
  standalone: true,
  imports: [],
  templateUrl: './donut-card.component.html',
  styleUrl: './donut-card.component.css'
})
export class DonutCardComponent {
  @Input({required: true}) name: string = "";
  @Input({required: true}) imageUrl: string = "";
}
