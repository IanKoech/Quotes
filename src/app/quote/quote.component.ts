import { Component, OnInit, Input } from '@angular/core';
import {QuoteCreate} from '../quote-create';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  title:string ="Quotes";
  quotes:QuoteCreate[]=[
    new QuoteCreate('Ian Koech','Yesterday is history, tomorrow is a mystery, but today is a gift, that is why it is called the present',new Date(2011,1,4)),
    new QuoteCreate('Oprah Winfrey','Be thankful for what you have , you will end up having more. If you concentrate on what you dont have you will never have enough',new Date(2015,4,29)),
    new QuoteCreate('Dolly Parton','The way I see it if you want the rainbow, you have got to put up with the rain',new Date(2017,1,26))
  ];
  /**Has methods that pushes a quote to the quotes array */
  addNewQuote(quote){
    let quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    quote.timePassed=new Date(quote.timePassed);
    this.quotes.push(quote);
  }
  /*Method below shows quote details*/
  toggleShowDetails(index){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }
  makeUpVote(index){
    this.quotes[index].upvotes++;
  }
  makeDownVote(index){
    this.quotes[index].downvotes++;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
