import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product:Product|null=null;
  @Input() index:number=0;

  @Output() productDelete=new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(){
    this.productDelete.emit(this.index);
  }

}