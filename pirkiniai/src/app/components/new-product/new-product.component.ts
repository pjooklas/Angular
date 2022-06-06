import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  public name:string="";
  public quantity:number=0;

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
  }

  public addProduct(){
      this.productsService.addProduct(this.name,this.quantity);
  }

}