import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { LevelPipe } from '../level.pipe';

@Component({
  selector: 'app-card',
  imports: [LevelPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  employee : Employee = {
    _id:'675173e704ea0d53bbcdb314',
    name:'Abdeslam',
    departement:'IT',
    level:'S'
  }

}
