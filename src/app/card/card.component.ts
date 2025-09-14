import { Component, input, output } from '@angular/core';
import { LevelPipe } from '../level.pipe';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-card',
  imports: [LevelPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  employee = input.required<Employee>();

}
