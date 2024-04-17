import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BookComponent} from './book/book.component';
import {BooksComponent} from './books/books.component';
import {BookService} from "./book.service";

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: BookService, useClass: BookService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
