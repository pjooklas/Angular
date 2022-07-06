import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PadangosListComponent } from './components/padangos-list/padangos-list.component';
import { PadangosNewComponent } from './components/padangos-new/padangos-new.component';
import { PadangosUpdateComponent } from './components/padangos-update/padangos-update.component';

const routes: Routes = [
  {path:"", component:PadangosListComponent},
  {path:"add", component:PadangosNewComponent},
  {path:"update/:id", component:PadangosUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
