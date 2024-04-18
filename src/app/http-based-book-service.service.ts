import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Book} from "./book";

@Injectable({
  providedIn: 'root'
})
export class HttpBasedBookServiceService {

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    //TODO catch errors
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  bookExists(title: string): Observable<boolean> {
    return this.getBooks().pipe(map(values => values.map(book => book.title)
      .includes(title)))
  }
}
