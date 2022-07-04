import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { AboutComponent } from "./about/components/about/about.component";
// import { AddCityComponent } from "./components/add-city/add-city.component";
import { EmployeDetailsComponent } from "./components/employe-details/employe-details.component";
import { EmployeListComponent } from "./components/employe-list/employe-list.component";
import { EmployeNewComponent } from "./components/employe-new/employe-new.component";

const routes:Routes=[
    {path:'', component:EmployeListComponent},
    {path:'employe/:id', component:EmployeDetailsComponent},
    {path:'employeAdd', component:EmployeNewComponent},
    // {path:'cityAdd', component:AddCityComponent},
    // {path: 'about', component:AboutComponent}
  ]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],

    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{

}