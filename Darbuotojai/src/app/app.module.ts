import { NgModule } from '@angular/core';
import { FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeNewComponent } from './components/employe-new/employe-new.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeNewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    // FormArray
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
