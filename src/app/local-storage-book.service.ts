import {Injectable} from '@angular/core';
import {Book} from "./book";

@Injectable()
export class LocalStorageBookService {

  private readonly books: Book[];

  constructor() {
    const item = localStorage.getItem('books');
    if (item) {
      this.books = JSON.parse(item);
    } else {
      this.books = [];
    }
  }

  getBooks(): Book[] {
    return this.books;
  }
}
