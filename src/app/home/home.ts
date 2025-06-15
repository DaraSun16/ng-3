import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  imports: [Greeting],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  homeMessage = signal('hello world');

  keyUpHandler (event: KeyboardEvent) {
    console.log(`user typed something in the ${event.key}`);
  }
}
