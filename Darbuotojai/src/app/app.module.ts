import { NgModule } from '@angular/core';
import { FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeNewComponent } from './components/employe-new/employe-new.component';
import { EmployeListComponent } from './components/employe-list/employe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeNewComponent,
    EmployeListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
