import { Component, OnInit } from '@angular/core';
import { task } from 'src/app/model/task.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

tasks:any[]=[];
name:string="";
employeeName:string="";
employeeId:number=0

constructor(private employeeService :EmployeeService){}
  ngOnInit(): void {
    this.getAllTask();
  }


  getAllTask():void{
    this.employeeService.getAllTasks().subscribe({
      next:(data)=>{
        this.tasks=data;
          console.log(this.tasks) ; 
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
}
