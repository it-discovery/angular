import {Component} from '@angular/core';
import {BookService} from "../book.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrl: './book-registration.component.css'
})
export class BookRegistrationComponent {

  constructor(private bookService: BookService) {
  }

  save(form: NgForm): void {
    this.bookService.save(form.value);
    form.reset();
  }

}
