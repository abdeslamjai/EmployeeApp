import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    constructor() { }
    private employees : Employee[] = [
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

  getEmployee(id: string){
    return this.employees.find(
        (employee) => employee._id === id
      ) || null;
  }

  deleteEmployee(id: string){
    
      return this.employees = this.employees.filter(
        (employee) => employee._id !== id
      );
  }

  getEmployees(){
    return this.employees;
  }

}
