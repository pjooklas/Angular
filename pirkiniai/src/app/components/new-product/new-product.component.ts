import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  public name:string="";
  public quantity:number=0;

  constructor(
    private productsService:ProductsService,
    private router:Router
  ) { }

  ngOnInit(): void {
    
  }

  public addProduct(){
      console.log(this.name+" "+this.quantity);
      this.productsService.addProduct(this.name,this.quantity);
      this.router.navigate(['/']);
  }

}