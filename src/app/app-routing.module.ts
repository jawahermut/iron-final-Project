import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { TaskListComponent } from './components/task-list/task-list.component';


const routes: Routes = [
{
path:'',
component:HomeComponent
},

{

  path:'employees',
  component:EmployeeListComponent

},

{

  path:'employees/new',
  component:CreateEmployeeComponent

},

{

  path:'employees/:id',
  component:EmployeeDetailsComponent

},

{

  path:'update-employees/:id',
  component:UpdateEmployeeComponent

},

{

  path:'task',
  component:TaskListComponent

}
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
