import {Component} from '@angular/core';
import {Book} from "../book";
import {BookService} from "../book.service";

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrl: './book-registration.component.css'
})
export class BookRegistrationComponent {

  constructor(private bookService: BookService) {
  }

  save(book: Book): void {
    this.bookService.save(book);
  }

}
