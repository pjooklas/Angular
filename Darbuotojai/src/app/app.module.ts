import { NgModule } from '@angular/core';
import { FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeNewComponent } from './components/employe-new/employe-new.component';
import { EmployeListComponent } from './components/employe-list/employe-list.component';
import { AddCityComponent } from './components/add-city/add-city.component';
import { EmployeItemComponent } from './components/employe-list/employe-item/employe-item.component';
import { EmployeDetailsComponent } from './components/employe-details/employe-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'', component:EmployeListComponent},
  {path:'employe/:id', component:EmployeDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeNewComponent,
    EmployeListComponent,
    AddCityComponent,
    EmployeItemComponent,
    EmployeDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
