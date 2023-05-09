import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    StudentListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports:[StudentListComponent]
})
export class StudentModule { }
