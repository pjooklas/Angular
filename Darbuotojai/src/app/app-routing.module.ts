import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { EmployeDetailsComponent } from "./components/employe-details/employe-details.component";
import { EmployeListComponent } from "./components/employe-list/employe-list.component";
import { EmployeNewComponent } from "./components/employe-new/employe-new.component";

const routes:Routes=[
    {path:'', component:EmployeListComponent},
    {path:'employe/:id', component:EmployeDetailsComponent},
    {path:'employeAdd', component:EmployeNewComponent},
    {path: 'about', loadChildren:()=>import ('./about/about.module' ).then(m=>m.AboutModule) }, //lazyloading
    {path: 'cities', loadChildren:()=>import ('./cities/cities.module' ).then(m=>m.CitiesModule) } //lazyloading

  ]

@NgModule({
    imports:[
        RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules}) //prelloadingas, kad kol esame pagrindinimae psl, krautu bg kitus modulius
    ],

    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{

}