import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewKidComponent } from './components/new-kid/new-kid.component';
import { GimimoValidationDirective } from './directives/gimimo-validation.directive';
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationEditComponent } from './components/registration-edit/registration-edit.component';

const routes:Routes=[
  {path: '', component:RegistrationListComponent},
  {path: 'registrationNew', component: NewKidComponent},
  {path: 'registrationEdit/:id', component:RegistrationEditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NewKidComponent,
    GimimoValidationDirective,
    RegistrationListComponent,
    RegistrationEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
