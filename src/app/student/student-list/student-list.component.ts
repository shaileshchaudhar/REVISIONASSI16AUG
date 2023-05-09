import { Component, OnInit } from '@angular/core';
import { StudentListService } from '../student-list.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  
})
export class StudentListComponent implements OnInit {
  studentList:any[]=[]

  constructor(private _data :StudentListService) { }

  ngOnInit(): void {
    this.studentList=this._data.getdata()
    
  }
  
  displayedColumns: string[] = ['StudentId', 'FullName','Class','RollNo','Math','English','Hindi','Science' ,'Drawing','Total'];

}
