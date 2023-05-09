import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogAnimationsExampleDialog, PersonComponent } from './person/person.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [
    PersonComponent,
    DialogAnimationsExampleDialog
    
    

  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule
   
  ],
  exports:[PersonComponent,DialogAnimationsExampleDialog]
})
export class PersonModule { }
