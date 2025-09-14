import { Component } from '@angular/core';
import { Employee } from './models/employee.model';
import { EmployeeListComponent } from './employeeList/employee-list.component';
import { filter } from 'rxjs';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-root',
  imports: [EmployeeListComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  currentEmployee : null | Employee = null;

  employees : Employee[] = [
    {
    _id:'675173e704ea0d53bbcdb312',
    name:'Abdeslam',
    departement:'IT',
    level:'S'
    },
    {
      _id:'675173e704ea0d53bbcdb313',
      name:'Camille',
      departement:'HR',
      level:'M'
    },
    {
      _id:'675173e704ea0d53bbcdb314',
      name:'Celine',
      departement:'IT',
      level:'S'
    },
    {
      _id:'675173e704ea0d53bbcdb315',
      name:'Jean Paul',
      departement:'MARKETING',
      level:'J'
    },
    {
      _id:'675173e704ea0d53bbcdb316',
      name:'Aymen',
      departement:'IT',
      level:'M'
    }
  ];

  showDetails(employeeId: string) {
      console.log(employeeId);

      this.currentEmployee = this.employees.find(
        (employee) => employee._id === employeeId
      ) || null;
  }

  onEdit(employeeId: string) {
        console.log(employeeId);
  }

  onDelete(employeeId: string) {
    this.currentEmployee = null;
      this.employees = this.employees.filter(
        (employee) => employee._id !== employeeId
      );
  }

  

  
}
