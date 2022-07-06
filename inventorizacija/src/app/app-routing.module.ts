import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventorizacijaListComponent } from './components/inventorizacija-list/inventorizacija-list.component';
import { InventorizacijaNewComponent } from './components/inventorizacija-new/inventorizacija-new.component';
import { InventorizacijaUpdateComponent } from './components/inventorizacija-update/inventorizacija-update.component';

const routes: Routes = [
  {path:'', component:InventorizacijaListComponent},
  {path:'new', component:InventorizacijaNewComponent},
  {path:'update/:id', component:InventorizacijaUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
