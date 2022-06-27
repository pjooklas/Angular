import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NaujasReceptasComponent } from './components/naujas-receptas/naujas-receptas.component';
import { ReceptaiListComponent } from './components/receptai-list/receptai-list.component';
import { AddIngridientasComponent } from './components/add-ingridientas/add-ingridientas.component';

@NgModule({
  declarations: [
    AppComponent,
    NaujasReceptasComponent,
    ReceptaiListComponent,
    AddIngridientasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
