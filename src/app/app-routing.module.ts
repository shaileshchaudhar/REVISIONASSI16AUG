import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person/person.component';
import { StudentListComponent } from './student/student-list/student-list.component';

const routes: Routes = [
  {path:'PersonForm',component:PersonComponent},
  {path:'StudentList',component:StudentListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
