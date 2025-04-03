import { Component, signal } from '@angular/core';
import { TitlePipeComponent } from '../../components/title-pipe/title-pipe.component';
import { CardComponent } from '../../components/card/card.component';
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';

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
  imports: [TitlePipeComponent, CardComponent, I18nSelectPipe, I18nPluralPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  //i18nSelect
  cliente = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.cliente() === client1) {
      this.cliente.set(client2);
      return;
    }

    this.cliente.set(client1);
  }

  clientesMap =  signal({
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  })
  // i18n Plural
  clientes = signal<string[]>([
    'Ana',
    'Juan',
    'Elena',
    'Carlos',
    'Sofía',
    'Mateo',
    'Lucía',
    'Daniel',
    'Paula',
    'Alejandro',
  ]);

  deleteClient() {
    this.clientes.update((prev) => {
      prev.pop();
      return prev;
    });
  }
}
