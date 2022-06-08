import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { FormsModule } from '@angular/forms';
import { ProductsStatisticsComponent } from './components/products-statistics/products-statistics.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const appRoutes:Routes=[
  {path:'', component:ProductListComponent},
  {path:'new', component:NewProductComponent},
  {path:'update/:index', component:UpdateProductComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NewProductComponent,
    ProductsStatisticsComponent,
    NavigationComponent,
    UpdateProductComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
