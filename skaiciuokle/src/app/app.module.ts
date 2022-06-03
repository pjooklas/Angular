import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkaiciuokleComponent } from './components/skaiciuokle/skaiciuokle.component';

@NgModule({
  declarations: [
    AppComponent,
    SkaiciuokleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
