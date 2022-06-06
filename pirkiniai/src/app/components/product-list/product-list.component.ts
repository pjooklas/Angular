import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products:Product[]=[];

  constructor() {
    this.products.push(new Product("Duona", 1));
    this.products.push(new Product("Pienas", 3));
    this.products.push(new Product("Ruginiai miltai", 1));
   }

  ngOnInit(): void {
  }

}