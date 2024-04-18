import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'quote',
  standalone: true
})
export class QuotePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value) {
      return '"' + value + '"';
    }
    return value;
  }

}
