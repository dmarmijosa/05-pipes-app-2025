import { Component, signal } from '@angular/core';
import { TitlePipeComponent } from '../../components/title-pipe/title-pipe.component';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/canFly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/heroTextColor.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/heroCreator.pipe';
import { HeroSortBYPipe } from '../../pipes/heroSortBY.pipe';
import { Hero } from '../../interfaces/her.interface';

@Component({
  imports: [
    TitlePipeComponent,
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    HeroSortBYPipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('angular');
  toggle = signal(false);
  heroes = signal(heroes);
  sortBy = signal<keyof Hero | null>(null);
}
