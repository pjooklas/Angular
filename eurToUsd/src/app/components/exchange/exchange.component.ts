import { Component, OnInit } from '@angular/core';
import { Exchange } from 'src/app/models/exchange';
import { ExchangeService } from 'src/app/services/exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  public exchange:Exchange|null=null;

  constructor(
    private exchangeService:ExchangeService
  ) { }

  ngOnInit(): void {
    this.exchangeCurrency();
  }

  public exchangeCurrency(){
    this.exchangeService.makeExchange().subscribe((result)=>{
      this.exchange=result;     
    })
  }


}
