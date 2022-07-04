import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NaujasReceptasComponent } from './components/naujas-receptas/naujas-receptas.component';
import { ReceptaiListComponent } from './components/receptai-list/receptai-list.component';
import { AddIngridientasComponent } from './components/add-ingridientas/add-ingridientas.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ReceptaiItemComponent } from './components/receptai-list/receptai-item/receptai-item.component';
import { ReceptasDetailsComponent } from './components/receptas-details/receptas-details.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DocumentationModule } from './documentation/documentation.module';

@NgModule({
  declarations: [
    AppComponent,
    NaujasReceptasComponent,
    ReceptaiListComponent,
    AddIngridientasComponent,
    NavigationComponent,
    ReceptaiItemComponent,
    ReceptasDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DocumentationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
