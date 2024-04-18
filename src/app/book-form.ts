import {FormControl} from "@angular/forms";

export interface BookForm {

  title: FormControl<string | null>;

  author: FormControl<string | null>;
}
