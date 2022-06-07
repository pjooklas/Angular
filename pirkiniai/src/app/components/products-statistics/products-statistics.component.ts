import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-statistics',
  templateUrl: './products-statistics.component.html',
  styleUrls: ['./products-statistics.component.css']
})
export class ProductsStatisticsComponent implements OnInit {
  public productCount:number=0;
  public productTotal:number=0;
  constructor( private productsService:ProductsService ) { }

  ngOnInit(): void {

   this.calculateStatis(); 

   this.productsService.onProductsChange.subscribe(()=>{
     this.calculateStatis(); 
   })

  }

  public calculateStatis(){
    this.productCount=this.productsService.products.length;

    this.productTotal=0;
    this.productsService.products.forEach((p)=>{
       this.productTotal+=p.quantity;
    });
  }

}