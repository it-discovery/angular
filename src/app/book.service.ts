import {Injectable} from '@angular/core';
import {Book} from "./book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly books: Book[];

  constructor() {
    this.books = [{
      title: 'JavaScript: The Good Parts',
      year: 2008,
      author: 'Douglas Crockford',
      pages: 172,
      description: 'This authoritative book scrapes away these bad features to reveal a subset of JavaScript that\'s more reliable, readable, and maintainable'
    }, {
      title: 'Mastering TypeScript',
      year: 2015,
      author: 'Nathan Rozentals',
      pages: 364,
      description: 'Build enterprise-ready, industrial strength web applications using TypeScript and leading JavaScript frameworks'
    }];
  }

  getBooks(): Book[] {
    return this.books;
  }

}
