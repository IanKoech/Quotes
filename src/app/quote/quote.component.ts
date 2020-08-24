import { Component, OnInit, Input } from '@angular/core';
import {QuoteCreate} from '../quote-create';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  title:string ="Quotes page";
  quotes:QuoteCreate[]=[
    new QuoteCreate('Ian Koech','Time passes by',new Date())
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
