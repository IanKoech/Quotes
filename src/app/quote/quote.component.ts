import { Component, OnInit } from '@angular/core';
import {QuoteCreate} from '../quote-create';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title:string ="Quotes Web";
  constructor() { }

  ngOnInit(): void {
  }

}
