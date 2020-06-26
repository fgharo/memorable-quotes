import { Component, OnInit, Input, ViewChild, ElementRef  } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DroppyService } from '../shared/service/droppy.service';
import { FormGroup, FormControl, FormBuilder  } from '@angular/forms';
import { Validators } from '@angular/forms';

import {Image } from '../shared/model/image';
import {Author } from '../shared/model/author';
import {Quote } from '../shared/model/quote';
import {InformationSource } from '../shared/model/information-source';
import {ApproximateDate } from '../shared/model/approximate-date';
import { QuoteService } from '../shared/service/quote.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  authorImageName: string;

  quotationForm: FormGroup = this.fb.group({
    quotation: [''],
    author: this.fb.group({
      firstName: [''],
      lastName: [''],
      birthDate: [''],
      deathDate: ['']
    }),
    source: this.fb.group({
      type: [''],
      title: [''],
      originDate: ['']
    })
  });

  constructor(private fb: FormBuilder, private quoteService: QuoteService){}

  ngOnInit() {
    this.authorImageName = "no_author_image.png";
  }

  onSubmit() {
    let authorObservable = this.quoteService.postAuthor(new Author(this.quotationForm.get('author'), this.authorImageName));
    let sourceObservable = this.quoteService.postInformationSource(new InformationSource(this.quotationForm.get('source')));

    forkJoin([authorObservable, sourceObservable]).subscribe(results =>{
      let quote = new Quote(this.quotationForm.get('quotation').value, results[0].id, results[1].id);
      this.quoteService
      .postQuote(quote)
      .subscribe((quoteResponse)=>{
          console.log("Posted quote with id: " + quoteResponse.id);
          console.log("Redirecting to quote edit page.");

      });

    });

    /*
      create an author, create an information source objects.
      post author and source objects.
      We should have their ids, Create a quote and post it.
      Forward to daily quote? or quote catalog?
    */
  }

  setAuthorImage(fileName: string){
    this.authorImageName = fileName;
  }

}
