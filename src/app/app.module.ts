import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteCreateFormComponent } from './components/quote-create-form/quote-create-form.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteCreateFormComponent,
    QuoteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
