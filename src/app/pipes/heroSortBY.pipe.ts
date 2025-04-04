import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/her.interface';

@Pipe({
  name: 'heroSortBY',
})
export class HeroSortBYPipe implements PipeTransform {
  transform(value: Hero[], sortBY: keyof Hero | null): Hero[] {
    if(!sortBY) return value;
    switch(sortBY){
      case 'name':
        return value.sort((a, b) => a.name.localeCompare(b.name));
      case 'canFly':
        return value.sort((a, b) => Number(b.canFly) - Number(a.canFly));
      case 'color':
        return value.sort((a, b) => a.color - b.color);
      case 'creator':
        return value.sort((a, b) => a.creator - b.creator);

      default:
        return value;
    }
  }
}
