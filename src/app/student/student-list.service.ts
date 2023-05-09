import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {

  constructor() { }
  private studentList:any []=[
    {StudentId:1,FirstName:"Nick",MiddleName:"",LastName:"Mark", Class:"X", RollNo:23, Math:90, English:90,Hindi:90, Science:90,Drawing:97},
    {StudentId:2,FirstName:"Shailesh",MiddleName:"Kumar",LastName:"Chaudhary", Class:"X", RollNo:23, Math:60, English:65,Hindi:65, Science:90,Drawing:65 },
    {StudentId:3,FirstName:"Rohit",MiddleName:"",LastName:"Gupta", Class:"X", RollNo:24, Math:75, English:80,Hindi:66, Science:33,Drawing:47 },
    {StudentId:4,FirstName:"Shruti",MiddleName:"",LastName:"Gupta", Class:"X", RollNo:25, Math:36, English:4,Hindi:44, Science:4,Drawing:90 },
    {StudentId:5,FirstName:"Vertika",MiddleName:"",LastName:"Gupta", Class:"X", RollNo:26, Math:32, English:8,Hindi:4, Science:54,Drawing:43 },
    {StudentId:6,FirstName:"Mamta",MiddleName:"",LastName:"Chaudhary", Class:"X", RollNo:27, Math:90, English:99,Hindi:100, Science:98,Drawing:90 },



  ];
  getdata(){
    return this.studentList
  }
}
