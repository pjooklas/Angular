import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  public products:Product[]=[];
  public onProductsChange=new EventEmitter();
  
  constructor() { 
  
  }

  public addProduct(name:string, quantity:number){
    this.products.push(new Product(name, quantity));
    this.saveProducts();
    this.onProductsChange.emit();
  }

  public deleteProduct(n:number){
    this.products.splice(n,1);
    this.saveProducts();
    this.onProductsChange.emit();
  }

  public loadProducts(){
    let data=localStorage.getItem("products");
    if (data!=null){
      this.products=JSON.parse(data);
    }
  }

  public saveProducts(){
      localStorage.setItem("products", JSON.stringify(this.products));
  }
}