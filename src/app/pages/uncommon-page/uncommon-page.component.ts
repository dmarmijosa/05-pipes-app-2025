import { Component } from '@angular/core';
import { TitlePipeComponent } from "../../components/title-pipe/title-pipe.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
  imports: [TitlePipeComponent, CardComponent],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent { }
