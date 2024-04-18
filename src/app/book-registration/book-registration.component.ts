import {Component} from '@angular/core';
import {BookService} from "../book.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrl: './book-registration.component.css'
})
export class BookRegistrationComponent {

  bookForm: FormGroup;

  constructor(private bookService: BookService, formBuilder: FormBuilder) {
    this.bookForm = formBuilder.group({
      title: formBuilder.control('', [Validators.required,
        Validators.minLength(4), Validators.maxLength(32)]),
      author: formBuilder.control('', [Validators.required,
        Validators.minLength(4), Validators.maxLength(32)]),
    })
  }

  save(): void {
    this.bookService.save(this.bookForm.value);
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
