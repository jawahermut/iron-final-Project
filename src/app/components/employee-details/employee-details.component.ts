import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent  implements OnInit{
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
  this.employeeId=this.route.snapshot.paramMap.get('id');

  console.log("EmployeeId = ",this.employeeId)
  this.getEmployeeDetails();
}

getEmployeeDetails():void{
 // const employeeId=this.route.snapshot.params['id'];
  this.employeeService.getEmployeeDetails(this.employeeId).subscribe({
    next:(data)=>{
      this.employee=data;
      console.log(this.employee);
      console.log("Employee= ",this.employeeId);
    }
  });
}

}


