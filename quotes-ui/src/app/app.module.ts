import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteCatalogComponent } from './quote-catalog/quote-catalog.component';
import { DailyQuoteComponent } from './daily-quote/daily-quote.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressBarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    QuoteCatalogComponent,
    DailyQuoteComponent,
    AddQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,  
     MatIconModule,
     MatButtonModule,
     MatCardModule,
     MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
