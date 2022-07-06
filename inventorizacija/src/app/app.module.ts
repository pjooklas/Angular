import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InventorizacijaListComponent } from './components/inventorizacija-list/inventorizacija-list.component';
import { InventorizacijaNewComponent } from './components/inventorizacija-new/inventorizacija-new.component';
import { InventorizacijaUpdateComponent } from './components/inventorizacija-update/inventorizacija-update.component';

@NgModule({
  declarations: [
    AppComponent,
    InventorizacijaListComponent,
    InventorizacijaNewComponent,
    InventorizacijaUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
