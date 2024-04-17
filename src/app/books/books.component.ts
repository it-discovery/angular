import {Component} from '@angular/core';
import {Book} from "../book";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  books: Book[];

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

  isJavaScript(book: Book): boolean {
    return book.title.indexOf('JavaScript') >= 0;
  }
}
