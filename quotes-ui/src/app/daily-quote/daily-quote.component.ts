import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { QuoteService } from '../shared/service/quote.service';
import { Quote } from '../shared/model/quote';

@Component({
  selector: 'app-daily-quote',
  templateUrl: './daily-quote.component.html',
  styleUrls: ['./daily-quote.component.css']
})
export class DailyQuoteComponent implements OnInit {
  quote: Quote;
  constructor(
    private quoteService: QuoteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.quoteService.randomQuote()
      .subscribe((response) =>{
        this.quote = response;
        this.quoteService.getAuthor(this.quote.author_id).subscribe((authorResponse) =>{
//          console.log("Getting author for id: " + quote.author_id);
          this.quote.author = authorResponse;
        });

        this.quoteService.getInformationSource(this.quote.informationsource_id).subscribe((sourceResponse) =>{
  //        console.log("Getting source for id: " + quote.informationsource_id);
          this.quote.source = sourceResponse;
        });
      });
    });
  }

}
