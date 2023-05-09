import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  personForm!:FormGroup

  constructor(private _fb:FormBuilder,private _dilog:MatDialog) { }

  ngOnInit(): void {
    this.personForm=this._fb.group({
       FirstName:['',Validators.required],
       Middlename:['',Validators.required],
       LastName:['',Validators.required],
       Department:['',Validators.required],
       Gender :['',Validators.required],
      DOB :['',Validators.required],
      Address1 :['',Validators.required],
      Pincode :['',[Validators.minLength(1),Validators.maxLength(6),Validators.required]],
      

    })
    
  }

  Submit():void{
    console.log(this.personForm.value.FirstName)
    if(this.personForm.untouched){
      alert('please fill the form')
   
    }
    else{
      this._dilog.open(DialogAnimationsExampleDialog)

    }
    
      
      
  
    }
   
   
    

}
@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dilog.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) { }
  close(){
    this.dialogRef.close()
  }
}

