import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import {QuoteCreate} from  '../quote-create';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {
  @Input() quote:QuoteCreate;
  @Output() quoteDetailsShow=new EventEmitter<boolean>();
  displayDetails(show:boolean){
    this.quoteDetailsShow.emit(show);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
