import { Component, signal } from '@angular/core';
import { TitlePipeComponent } from '../../components/title-pipe/title-pipe.component';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-number-page',
  imports: [TitlePipeComponent, DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './number-page.component.html',
})
export default class NumberPageComponent {
  totalSells = signal(2_334_567.5567);
  percent = signal(0.4856);
}
