import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeNewComponent } from './components/employe-new/employe-new.component';
import { EmployeListComponent } from './components/employe-list/employe-list.component';
import { EmployeItemComponent } from './components/employe-list/employe-item/employe-item.component';
import { EmployeDetailsComponent } from './components/employe-details/employe-details.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkaiciuokleComponent } from './components/skaiciuokle/skaiciuokle.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeNewComponent,
    EmployeListComponent,
    EmployeItemComponent,
    EmployeDetailsComponent,
    NavigationComponent,
    SkaiciuokleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
