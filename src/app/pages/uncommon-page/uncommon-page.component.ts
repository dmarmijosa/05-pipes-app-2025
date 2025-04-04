import { Component, signal } from '@angular/core';
import { TitlePipeComponent } from '../../components/title-pipe/title-pipe.component';
import { CardComponent } from '../../components/card/card.component';
import {
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  SlicePipe,
  KeyValuePipe,
  AsyncPipe,
} from '@angular/common';
import { interval, tap } from 'rxjs';

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
  imports: [
    TitlePipeComponent,
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    KeyValuePipe,
    AsyncPipe,
  ],
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

  clientesMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  });
  // i18n Plural
  clientes = signal<string[]>([
    'Ana',
    'Juan',
    'Elena',
    'Carlos',
    'Sofía',
    'Mateo',
  ]);

  deleteClient() {
    this.clientes.update((prev) => {
      prev.pop();
      return prev;
    });
  }

  profile = {
    name: 'Fernando',
    age: 35,
    address: 'Ottawa, Canadá',
  };

  //Async Pipe
  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos una promesa');
      console.log('Promesa resuelta');
    }, 3500);
  });

  myObsservableInterval = interval(2000).pipe(
    tap((value) => console.log(value))
  );
}
