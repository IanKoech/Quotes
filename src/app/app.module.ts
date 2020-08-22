import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { QuoteDetailsDisplayComponent } from './quote-details-display/quote-details-display.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuoteDisplayComponent,
    QuoteDetailsDisplayComponent
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
