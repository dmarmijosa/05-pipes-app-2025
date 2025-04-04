import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/her.interface';

@Pipe({
  name: 'heroFilter',
})
export class HeroFilterPipe implements PipeTransform {
  transform(value: Hero[], filter: string): Hero[] {
    if(filter.length === 0) return value;
    return value.filter((hero) => hero.name.toLowerCase().includes(filter.toLowerCase()));
  }
}
