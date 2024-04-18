import {Component, inject} from '@angular/core';
import {BookService} from "../book.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  books = inject(BookService).getBooks();

  constructor() {
  }

}
