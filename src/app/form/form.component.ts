import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import {QuoteCreate} from '../quote-create';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote=new QuoteCreate("","",new Date());
  @Output() addQuote=new EventEmitter<QuoteCreate>();
  
  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
