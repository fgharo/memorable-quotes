import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
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

  postAuthor(author: Author): Observable<any> {
    console.log("Posting author...");
    console.log(author);
    //return of({id: 'someAuthorId'});
    return this.httpClient.post<any>(this.quoteServiceUrl + 'author', author);
  }

  postInformationSource(informationSource: InformationSource): Observable<any> {
    console.log("Posting source...");
    console.log(informationSource);
    //return of({id: 'someSourceId'});
    return this.httpClient.post<any>(this.quoteServiceUrl + 'informationsource', informationSource);
  }

  postQuote(quote: Quote): Observable<any> {
    console.log("Posting quote...");
    console.log(quote);
  //  return of({id: 'someQuoteId'});
    return this.httpClient.post<any>(this.quoteServiceUrl + 'quote', quote);
  }

}
