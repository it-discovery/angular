import {Component} from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  book = {
    title: 'Angular 17',
    year: 2024, author: 'N/A', pages: 500, description: 'Development of Angular applications'
  };
}
