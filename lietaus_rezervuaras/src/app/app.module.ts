import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LietausRezervuarasComponent } from './components/lietaus-rezervuaras/lietaus-rezervuaras.component';

@NgModule({
  declarations: [
    AppComponent,
    LietausRezervuarasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
