import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteCatalogComponent } from './quote-catalog/quote-catalog.component'
import { DailyQuoteComponent } from './daily-quote/daily-quote.component'
import { AddQuoteComponent } from './add-quote/add-quote.component'


const routes: Routes = [
  {path: '', redirectTo: '/daily-quote', pathMatch: 'full'},
  {
    path: 'quote-catalog',
    component: QuoteCatalogComponent
  },
  {
    path: 'daily-quote',
    component: DailyQuoteComponent
  },
  {
    path: 'add-quote',
    component: AddQuoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
