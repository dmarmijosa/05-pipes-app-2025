import {
  DatePipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { TitlePipeComponent } from '../../components/title-pipe/title-pipe.component';
import { availableLocale, LocaleService } from '../../services/locale.service';

@Component({
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    TitlePipeComponent,
    DatePipe,
  ],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  localeService = inject(LocaleService);

  nameLower = signal('Danny');
  nameUpper = signal('DANNY');
  fullName = signal('DAnNY Armijos');

  customDate = signal<Date>(new Date());
  tickindDate = effect((onCleanUp) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanUp(() => {
      clearInterval(interval);
    });
  });

  changeLocal(local: availableLocale) {
    this.localeService.changeLocal(local);
  }
}
