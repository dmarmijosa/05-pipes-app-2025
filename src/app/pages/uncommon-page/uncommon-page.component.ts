import { Component, signal } from '@angular/core';
import { TitlePipeComponent } from '../../components/title-pipe/title-pipe.component';
import { CardComponent } from '../../components/card/card.component';
import { I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'Danny',
  gender: 'male',
  age: 39,
  address: 'Ottawa, Canadá',
};

const client2 = {
  name: 'Paola',
  gender: 'female',
  age: 33,
  address: 'Toronto, Canadá',
};

@Component({
  imports: [TitlePipeComponent, CardComponent, I18nSelectPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  //i18nSelect
  cliente = signal(client1);

  invitationMap = {
    male:'invitarlo',
    female: 'invitarla'
  }

  changeClient() {
    if (this.cliente() === client1) {
      this.cliente.set(client2);
      return;
    }

    this.cliente.set(client1);
  }
}
