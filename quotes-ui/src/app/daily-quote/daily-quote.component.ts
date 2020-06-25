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
  imagePath: string;
  imageWidth: string;
  imageHeight: string;

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
          this.quote.author = authorResponse;
          if(this.quote.author.image != null){
            this.imagePath = "http://localhost:8080/image/" + this.quote.author.image.fileName;
            this.imageWidth = this.quote.author.image.width + "px";
            this.imageHeight = this.quote.author.image.height + "px";
          }else{
            this.imagePath = "assets/images/no_author_image.png"
            this.imageWidth = "200px";
            this.imageHeight = "200px";
          }

        });

        this.quoteService.getInformationSource(this.quote.informationsource_id).subscribe((sourceResponse) =>{
          this.quote.source = sourceResponse;
        });
      });
    });
  }

}
