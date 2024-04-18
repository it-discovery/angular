import {Component, SecurityContext} from '@angular/core';
import {BookService} from "../book.service";
import {FormBuilder, FormControl, FormRecord, Validators} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrl: './book-registration.component.css'
})
export class BookRegistrationComponent {

  bookForm: FormRecord<FormControl<string | null>>;

  constructor(private bookService: BookService, formBuilder: FormBuilder,
              private domSanitizer: DomSanitizer) {
    this.bookForm = formBuilder.record({
      title: formBuilder.control('', [Validators.required,
        Validators.minLength(4), Validators.maxLength(32)]),
      author: formBuilder.control('', [Validators.required,
        Validators.minLength(4), Validators.maxLength(32)]),
    })
  }

  save(): void {
    const book = this.bookForm.value as any;
    book.title = this.domSanitizer.sanitize(SecurityContext.HTML, book.title || '') as string;
    this.bookService.save(book);
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
