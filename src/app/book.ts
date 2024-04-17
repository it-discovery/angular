type StringOrEmpty = string | undefined;

export class Book {
  title: StringOrEmpty;
  year: number | undefined;
  author: StringOrEmpty;
  pages?: number;
  description?: string;
}
