import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Quote } from '../model/quote';
import { Author } from '../model/author';
import { InformationSource } from '../model/information-source';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private quoteServiceUrl = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  getQuotes(): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>(this.quoteServiceUrl + 'quote');
  }

  getAuthor(id: string): Observable<Author> {
    return this.httpClient.get<Author>(this.quoteServiceUrl + 'author' + '?id=' + id);
  }

  getInformationSource(id: string): Observable<InformationSource> {
    return this.httpClient.get<InformationSource>(this.quoteServiceUrl + 'informationsource' + '?id=' + id);
  }

  randomQuote(): Observable<Quote> {
    return this.httpClient.get<Quote>(this.quoteServiceUrl + 'quote?random');
  }
}
