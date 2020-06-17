import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { QuoteService } from '../shared/service/quote.service';
import { Quote } from '../shared/model/quote';

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
              this.quoteService.getAuthor(quote.author_id).subscribe((authorResponse) =>{
                console.log("Getting author for id: " + quote.author_id);
                quote.author = authorResponse;
              });

              this.quoteService.getInformationSource(quote.informationsource_id).subscribe((sourceResponse) =>{
                console.log("Getting source for id: " + quote.informationsource_id);
                quote.source = sourceResponse;
              });
          });

          /* TODO Probably want to do another service call that gets data such as author,
          information source, etc, since these will most likely be different collections. */
        });
    });

  }

}
