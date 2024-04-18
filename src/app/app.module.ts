import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BookComponent} from './book/book.component';
import {BooksComponent} from './books/books.component';
import {BookService} from "./book.service";
import {environment} from "../environments/environment";
import {LocalStorageBookService} from "./local-storage-book.service";
import {QuotePipe} from "./quote.pipe";

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    QuotePipe
  ],
  providers: [{provide: BookService, useClass: environment.production ? LocalStorageBookService : BookService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
