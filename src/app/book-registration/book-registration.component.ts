import {Component, EventEmitter, Output, SecurityContext} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {Book} from "../book";
import {BookForm} from "../book-form";
import {map, Observable} from "rxjs";
import {BookService} from "../book.service";

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrl: './book-registration.component.css'
})
export class BookRegistrationComponent {

  bookForm: FormGroup<BookForm>;

  @Output()
  bookSaved = new EventEmitter<Book>();

  constructor(formBuilder: FormBuilder, private domSanitizer: DomSanitizer,
              private bookService: BookService) {
    this.bookForm = formBuilder.group({
      title: formBuilder.control('', [Validators.required,
          Validators.minLength(4), Validators.maxLength(32)],
        [this.validateTitleExistence.bind(this)]),
      author: formBuilder.control('', [Validators.required,
        Validators.minLength(4), Validators.maxLength(32), this.validateAuthor]),
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

  validateAuthor(control: FormControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    if (control.value.toString().split(' ').length >= 2) {
      return null;
    }
    return {authorTooSmall: true};
  }

  validateTitleExistence(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.bookService.bookExists(control.value)
      .pipe(map(result => {
          if (!result) {
            return null;
          } else {
            return {titleExists: true};
          }
        }
      ));
  }

  // save(form: NgForm): void {
  //   this.bookService.save(form.value);
  //   form.reset();
  // }

}
