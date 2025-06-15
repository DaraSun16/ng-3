import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header],
  template: `
    <app-header />
    <main>
      <app-home />
    </main>
    <router-outlet />
  `,
  styles: [`

  main {
    padding-inline: 16px
  }
    `],
})
export class App {
  protected title = 'ng-3';
}
