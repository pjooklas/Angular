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

    public makeExchange(){
      return this.http.get<Exchange>('https://api.frankfurter.app/latest?from=EUR&to=USD');
    }



}
