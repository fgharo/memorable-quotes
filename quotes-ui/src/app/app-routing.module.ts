import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteCatalogComponent } from './quote-catalog/quote-catalog.component'
import { DailyQuoteComponent } from './daily-quote/daily-quote.component'


const routes: Routes = [
  {path: '', redirectTo: '/daily-quote', pathMatch: 'full'},
  {
    path: 'quote-catalog',
    component: QuoteCatalogComponent
  },
  {
    path: 'daily-quote',
    component: DailyQuoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
