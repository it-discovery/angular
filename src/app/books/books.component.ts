import {Component} from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  books: Book[] = [];

  constructor(private bookService: BookService) {
    this.bookService.getBooks().subscribe(value => this.books = value);
  }

  saveBook(book: Book): void {
    this.bookService.save(book);
  }
}
