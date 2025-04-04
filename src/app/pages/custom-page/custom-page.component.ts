import { Component } from '@angular/core';
import { TitlePipeComponent } from "../../components/title-pipe/title-pipe.component";

@Component({
  imports: [TitlePipeComponent],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent { }
