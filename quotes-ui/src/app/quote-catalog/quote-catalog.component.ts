import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, forkJoin } from 'rxjs';

import { QuoteService } from '../shared/service/quote.service';
import { Quote } from '../shared/model/quote';
import { Author } from '../shared/model/author';
import { InformationSource } from '../shared/model/information-source';
import { ApproximateDate } from '../shared/model/approximate-date';

@Component({
  selector: 'app-quote-catalog',
  templateUrl: './quote-catalog.component.html',
  styleUrls: ['./quote-catalog.component.css']
})
export class QuoteCatalogComponent implements OnInit {
  quotes: Quote[];
  constructor(
    private quoteService: QuoteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.quoteService.getQuotes()
        .subscribe((response) => {
          this.quotes = response;
          console.log(this.quotes);
          this.quotes.forEach((quote) => {
              let authorObservable = this.quoteService.getAuthor(quote.author_id);
              let sourceObservable = this.quoteService.getInformationSource(quote.informationsource_id);

              forkJoin([authorObservable, sourceObservable]).subscribe((results)=>{
                quote.author = results[0];
                quote.source = results[1];
              });
          });
        });
    });

  }


  getPrettySourceOfInformation(quote: Quote): string{
      let result = '--  ';
      if(quote.author && quote.source){

        if(-1 == quote.author.firstName.indexOf("Unknown") &&  -1 < quote.author.lastName.indexOf("Unknown")){
          result += quote.author.firstName;
        }else if(-1 < quote.author.firstName.indexOf("Unknown") &&  -1 == quote.author.lastName.indexOf("Unknown")){
          result += quote.author.lastName;
        }else if(-1 < quote.author.firstName.indexOf("Unknown") &&  -1 < quote.author.lastName.indexOf("Unknown")){
          result += 'Unkown Author';
        }else{
          result += quote.author.lastName + ',' + quote.author.firstName;

        }

        if(quote.source.originDate && quote.source.originDate.year){
          result += ', ' + quote.source.originDate.year;
        }else{
          result += ', Unkown year';
        }

        if(quote.source.title && -1 == quote.source.title.indexOf("Unknown")){
          result += ', ' + quote.source.title;
        }else{
          result += ', Unkown title'
        }
      }else{
        result += 'loading...';
      }


      return result;
    }
}
