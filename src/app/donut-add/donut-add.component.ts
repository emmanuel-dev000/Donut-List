import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DonutService } from '../donut.service';

@Component({
  selector: 'app-donut-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './donut-add.component.html',
  styleUrl: './donut-add.component.css'
})
export class DonutAddComponent {
  @Output() close = new EventEmitter<void>(); 
  name : string = "";
  imageUrl : string = "";

  constructor(private donutService: DonutService) { }

  closeDonutPopup() {
    this.close.emit();
  }

  onSubmit() {
    this.donutService.addDonut(this.name, this.imageUrl);
    this.close.emit();
  }

}
