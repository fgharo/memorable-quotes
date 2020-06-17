import { Author } from './author';
import { InformationSource } from './information-source';
import { Note } from './note';

export interface Quote {
  quotation: string;
  author_id: string;
  author: Author;
  informationsource_id: string;
  source: InformationSource;
  notes: Note[];
}
