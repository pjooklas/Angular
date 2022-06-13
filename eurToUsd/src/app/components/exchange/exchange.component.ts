import { Component, OnInit } from '@angular/core';
import { Exchange, Rates } from 'src/app/models/exchange';
import { ExchangeService } from 'src/app/services/exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  public exchange:string="";
  public result:string="";
  public loading=true;
  public error=false;
  public currencyArray:{code:string,title:string}[]=[];
  public currencyFROM:string="";
  public currencyTO:string="";
  public amount:number=0;

  constructor(
    private exchangeService:ExchangeService
  ) { }

  ngOnInit(): void {
    this.getCurrencies();
  }

  public exchangeCurrency(){
    this.loading=true;
    this.exchangeService.makeExchange(this.currencyFROM, this.currencyTO, this.amount).subscribe({
      next:(result)=>{   
        this.exchange=Number(result.rates[this.currencyTO]).toFixed(2);
        this.result=`${this.amount} ${this.currencyFROM} = ${this.exchange} ${this.currencyTO}`;
        this.loading=false;   
      },
      error:(error)=>{
        console.log(error.status);
        this.error=true; 
      }
    });
  }

    public getCurrencies(){
      this.exchangeService.getCurrencies().subscribe({
        next:(result)=>{
          Object.entries(result).forEach(([key,value])=>{
            this.currencyArray.push({
              code:key,
              title:value
            });
          });
            
          this.loading=false;   
        },
        error:(error)=>{
          console.log(error.status);
          this.error=true; 
        }
      });
    }

   public clear(){
    this.result = '';
    this.currencyFROM= '';
    this.currencyTO= '';
    this.amount = 0;
   } 

}

