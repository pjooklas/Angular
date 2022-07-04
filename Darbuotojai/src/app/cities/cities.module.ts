import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddCityComponent } from '../components/add-city/add-city.component';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  {path: 'cityAdd', component:AddCityComponent}
];

@NgModule({
  declarations: [
    AddCityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],

})
export class CitiesModule { }
