import { Author } from './author';
import { InformationSource } from './information-source';
import { Note } from './note';

export class Quote {
  quotation: string;
  author_id: string;
  author: Author;
  informationsource_id: string;
  source: InformationSource;
  notes: Note[];

  constructor(
    quotation: string,
    author_id: string,
    informationsource_id: string
  ){
    this.quotation = quotation;
    this.author_id = author_id;
    this.informationsource_id = informationsource_id;
  }


}
