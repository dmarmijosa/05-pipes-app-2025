import { Pipe, type PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/her.interface';

@Pipe({
  name: 'heroCreator',
})
export class HeroCreatorPipe implements PipeTransform {

  transform(value: Creator): unknown {
    return value === Creator.DC? 'DC Comics' : 'Marvel Comics';
  }

}
