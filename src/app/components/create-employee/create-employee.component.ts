import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {


constructor(private http:HttpClient,private employeeService:EmployeeService){}

employee ={
  employeeName:'',
  employeeNumber:0,
  address:{
     street:'',
  city:'',
  state:'',
  postalCode:''

  }
 
};

addNewEmployee():void{
const myNewEmployee = {
  employeeName: this.employee.employeeName,
  employeeNumber:this.employee.employeeNumber,
  address: {
    street: this.employee.address.street,
    city: this.employee.address.city,
    state:this.employee.address.state,
    postalCode:this.employee.address.postalCode
  }
};
  
this.employeeService.addNewEmployee(myNewEmployee).subscribe(
  ()=>{
    console.log('Added Successfully!');
  },
  (error)=>{
    console.log('Error adding Employee:',error);
  }
);
}




}

