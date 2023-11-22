import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  employee:any={

    employeeName:'',
    employeeNumber:0,
    address:{
      street:'',
    city:'',
    state:'',
    postalCode:''
    
    }
    }
    private routeSub!: Subscription;
    employeeId:any='';
    
      constructor(private route:ActivatedRoute,
      private employeeService:EmployeeService){}
    
      ngOnInit(): void {
        this.employee.employeeId=this.route.snapshot.paramMap.get('id');
      this.updateEmployee();
      }

      updateEmployee(): void {
     const myform={
      employeeName: this.employee.employeeName,
      employeeNumber:this.employee.employeeNumber,
      address: {
        street: this.employee.address.street,
        city: this.employee.address.city,
        state:this.employee.address.state,
        postalCode:this.employee.address.postalCode
          
     }
        
    };
        this.employeeService.updateEmployee(this.employee.employeeId,myform).subscribe(
          ()=>{
            console.log('Added Successfully!');
          },
          (error)=>{
            console.log('Error update :',error);
          }
          
        
        
        );
      }
// 1.- get the id from url like in employee details
// 2.- Get the current employee data (like in the details)
// 3 .- When you submit your form, apply the changes
//this.employee.employeeNumber = this.employeeNumber;
// 4.- Send the data to backend
// this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(


}

