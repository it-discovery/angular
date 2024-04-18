import {Component, OnInit, signal} from '@angular/core';
import {Book} from "../book";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {
  book: Book;

  symbolCount = signal<number | undefined>(0);

  searchText = signal('');

  constructor() {
    this.book = {
      title: 'Angular 17',
      year: 2024, author: 'N/A', pages: 500, description: 'Development of Angular applications'
    };
  }

  onClick(value: string | number | undefined): void {
    this.symbolCount.set(value?.toString().length);
  }

  ngOnInit(): void {
  }
}
