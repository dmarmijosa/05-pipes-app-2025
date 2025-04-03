import { Component, input } from '@angular/core';

@Component({
  selector: 'component-title-pipe',
  imports: [],
  templateUrl: './title-pipe.component.html',
})
export class TitlePipeComponent {
  title = input.required<string>();
  subTitle = input.required<string>();
}
