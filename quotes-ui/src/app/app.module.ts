import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteCatalogComponent } from './quote-catalog/quote-catalog.component';
import { DailyQuoteComponent } from './daily-quote/daily-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteCatalogComponent,
    DailyQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
