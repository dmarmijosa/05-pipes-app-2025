import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitlePipeComponent } from '../../components/title-pipe/title-pipe.component';

@Component({
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, TitlePipeComponent],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  nameLower = signal('Danny');
  nameUpper = signal('DANNY');
  fullName = signal('DAnNY Armijos');
}
