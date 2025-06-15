import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodosService } from '../../services/todos';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  providers: [TodosService]
})
export class Header {
  title = ('My First Angular app');
}
