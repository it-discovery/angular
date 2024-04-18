import {Component, EventEmitter, Output, SecurityContext} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {Book} from "../book";
import {BookForm} from "../book-form";

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrl: './book-registration.component.css'
})
export class BookRegistrationComponent {

  bookForm: FormGroup<BookForm>;

  @Output()
  bookSaved = new EventEmitter<Book>();

  constructor(formBuilder: FormBuilder, private domSanitizer: DomSanitizer) {
    this.bookForm = formBuilder.group({
      title: formBuilder.control('', [Validators.required,
        Validators.minLength(4), Validators.maxLength(32)]),
      author: formBuilder.control('', [Validators.required,
        Validators.minLength(4), Validators.maxLength(32)]),
    })
  }

  save(): void {
    const book = this.bookForm.value as Book;
    book.title = this.domSanitizer.sanitize(SecurityContext.HTML, book.title || '') as string;

    this.bookSaved.emit(book);
    this.bookForm.reset();
  }

  isValid(controlName: string): boolean {
    return this.bookForm.get(controlName)!.dirty && !this.bookForm.get(controlName)?.valid;
  }

  // save(form: NgForm): void {
  //   this.bookService.save(form.value);
  //   form.reset();
  // }

}
