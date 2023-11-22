import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private readonly API_URL ="http://localhost:8080/api"
  constructor(private http: HttpClient) { }

//all emp
GetAllEmployees():Observable<any>{
  return this.http.get(this.API_URL+"/employees");
}

//Create emp
addNewEmployee(employee:any):Observable<any>{
  return this.http.post(`http://localhost:8080/api/employees`,employee)

}

//emp Detalis
getEmployeeDetails(employeeId:number):Observable<any>{
return this.http.get(`${this.API_URL}/employees/${employeeId}`);
}

//emp delete

deleteEmployee(employeeId:number | null): Observable<void> {
  const url = `${this.API_URL}/employees/${employeeId}`;
  return this.http.delete<void>(url);}

  //emp update
  updateEmployee(employeeId:number,employee:any):Observable<any>{
    return this.http.put(`${this.API_URL}/employees/${employeeId}`, employee);
  }

// all Tasks (this.API_URL/task );
getAllTasks():Observable<any> {
  return this.http.get(this.API_URL+"/task" );
}

// task details
/*getTaskDetails(taskId:number):Observable<any[]>{
  const url =`${this.API_URL}/${taskId}`;
  return this.http.get(url);
}*/


//postEmp

//TaskDetails

//search
}
