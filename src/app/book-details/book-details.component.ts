import {Component, Input} from '@angular/core';
import {Book} from "../book";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {

  @Input({required: true})
  book: Book | undefined;

  isJavaScript(book: Book | undefined): boolean {
    if (book) {
      return book.title.indexOf('JavaScript') >= 0;
    }
    return false;
  }
}