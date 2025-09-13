import { Level } from './models/level.model';
import { Pipe, PipeTransform } from '@angular/core';

const LEVELS : Record<Level, string> = {
  "J": "Junior",
  "M": "Mid",
  "S": "Senior",
}

@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {

  transform(value: Level): string {
    return LEVELS[value] || value;
  }

}
