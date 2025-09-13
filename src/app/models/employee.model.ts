import { Departement } from "./department.model";
import { Level } from "./level.model";

export interface Employee {
  _id: string;
  name: string;
  departement: Departement;
  level: Level;
}