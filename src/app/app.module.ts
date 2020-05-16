import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesEditComponent } from './courses/courses-edit/courses-edit.component';
import { TrainersComponent } from './trainers/trainers.component';
import { TrainersEditComponent } from './trainers/trainers-edit/trainers-edit.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'courses', component: CoursesComponent},
  {path: 'trainers', component: TrainersComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    CoursesEditComponent,
    TrainersComponent,
    TrainersEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
