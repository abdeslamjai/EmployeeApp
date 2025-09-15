import { Component, inject } from '@angular/core';
import { Employee } from './models/employee.model';
import { EmployeeListComponent } from './components/employeeList/employee-list.component';
import { filter } from 'rxjs';
import { EmployeeService } from './services/employee.service';
import { CardComponent } from './components/employeeCard/card.component';

@Component({
  selector: 'app-root',
  imports: [EmployeeListComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  
  employees : Employee[] = [];
  currentEmployee : null | Employee = null;

  employeeService = inject(EmployeeService);

  constructor(){
    this.employees = this.employeeService.getEmployees();
  }

  showDetails(employeeId: string) {
      this.currentEmployee = this.employeeService.getEmployee(employeeId);
  }

  onEdit(employeeId: string) {
        console.log(employeeId);
  }

  onDelete(employeeId: string) {
    this.currentEmployee = null;
    this.employees = this.employeeService.deleteEmployee(employeeId);
  }

  

  
}
