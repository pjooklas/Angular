import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  public index:number=0;
  public name:string="";
  public quantity:number=0;

  constructor(
    private route:ActivatedRoute,
    private productsService:ProductsService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.index=this.route.snapshot.params['index'];
    this.name=this.productsService.products[this.index].name;
    this.quantity=this.productsService.products[this.index].quantity;
  }

  public updateProduct(){
    this.productsService.updateProduct(this.index, this.name, this.quantity)
    this.router.navigate(["/"]);
}

}
