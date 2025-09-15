import { Component, input, output } from '@angular/core';

import { Employee } from '../../models/employee.model';
import { LevelPipe } from '../../pipes/level.pipe';

@Component({
  selector: 'app-card',
  imports: [LevelPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  employee = input.required<Employee>();

}
