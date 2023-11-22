import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{


  employees: employee[] = [];


  employeeName:string='';
  employeeNumber:Number=0;
  city:string=""; 
  postalCode:string="";
  state:string="";
  street:string="";

 
 
 
 
  constructor(private employeeService:EmployeeService,
    private http:HttpClient,
    private route: Router){}


  ngOnInit(): void {
  

    this.GetAllEmployees();
  }

  GetAllEmployees():void{
    this.employeeService.GetAllEmployees().subscribe({

      next:(data)=>{
        this.employees=data;
        console.log(this.employees);

      

      },
      error:(error)=>{
        console.log(error);
      }


    })
  }
  //DELETE METHOD
  deleteEmployee(employeeId: number): void {
    if (employeeId !== null) {
      this.employeeService.deleteEmployee(employeeId).subscribe({
        next: () => {
          this.employees = this.employees.filter((emp) => emp.employeeId !== employeeId);
          
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }
  updateEmployee(employeeId:number|null){
    this.route.navigate(['update-employees',employeeId]);
  }

}
