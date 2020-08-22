import { Component, OnInit } from '@angular/core';
import {QuoteCreate} from '../quote-create';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title:string ="Quotes page";
  quotes:QuoteCreate[];
  /**Has methods that pushes a quote to the quotes array */
  addNewQuote(quote){
    let quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    quote.timePassed=new Date(quote.timePassed);
    this.quotes.push(quote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
