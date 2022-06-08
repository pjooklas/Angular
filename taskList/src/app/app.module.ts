import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { TasksStatisticsComponent } from './components/tasks-statistics/tasks-statistics.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

const appRoutes:Routes=[
  {path:'', component:TasksListComponent},
  {path:'new', component:NewTaskComponent},
  {path:'about', component:AboutComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    NewTaskComponent,
    TasksStatisticsComponent,
    NavigationComponent,
    AboutComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
