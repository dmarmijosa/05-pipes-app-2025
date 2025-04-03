import { effect, Injectable, signal } from '@angular/core';
export type availableLocale = 'es' | 'fr' | 'en';
@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  private currentLocal = signal<availableLocale>('es');

  constructor() {
    this.currentLocal.set(
      (localStorage.getItem('locale') as availableLocale) ?? 'es'
    );
  }

  get getLocal() {
    return this.currentLocal();
  }

  changeLocal(locale: availableLocale) {
    this.currentLocal.set(locale);
    window.location.reload();
  }
  localEffect = effect(() => {
    localStorage.setItem('locale', this.currentLocal());

  });
}
