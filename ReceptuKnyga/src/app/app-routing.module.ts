import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddIngridientasComponent } from "./components/add-ingridientas/add-ingridientas.component";
import { NaujasReceptasComponent } from "./components/naujas-receptas/naujas-receptas.component";
import { ReceptaiListComponent } from "./components/receptai-list/receptai-list.component";
import { ReceptasDetailsComponent } from "./components/receptas-details/receptas-details.component";

const routes:Routes=[
    {path:'', component:ReceptaiListComponent},
    {path:'receptas/:id', component:ReceptasDetailsComponent},
    {path:'receptasAdd', component:NaujasReceptasComponent},
    {path:'ingridientasAdd', component:AddIngridientasComponent}
];

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