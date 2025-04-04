import { Pipe, type PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/her.interface';

@Pipe({
  name: 'heroTextColor',
})
export class HeroTextColorPipe implements PipeTransform {
  transform(value: Color) {
    return ColorMap[value] ?? ColorMap[Color.red];
  }
}
