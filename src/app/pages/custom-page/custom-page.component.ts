import { Component, signal } from '@angular/core';
import { TitlePipeComponent } from "../../components/title-pipe/title-pipe.component";
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/canFly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';

@Component({
  imports: [TitlePipeComponent, ToggleCasePipe, CanFlyPipe, HeroColorPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name= signal('angular');
  toggle = signal(false);

  changeToggle(){
    this.toggle.set(!this.toggle());
  }

  heroes =  signal(heroes)
}
