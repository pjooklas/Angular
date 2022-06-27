import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NaujasReceptasComponent } from './components/naujas-receptas/naujas-receptas.component';
import { ReceptaiListComponent } from './components/receptai-list/receptai-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NaujasReceptasComponent,
    ReceptaiListComponent
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
