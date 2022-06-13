import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exchange } from '../models/exchange';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(
    private http:HttpClient
  ) { }

    public makeExchange(from: string, to:string, amount:number){
      return this.http.get<Exchange>('https://api.frankfurter.app/latest', {
        params:{
          amount: amount,
          from: from,
          to: to
        }
      });
    }

    public getCurrencies() {
      return this.http.get(`https://api.frankfurter.app/currencies`);
    }

}
