# Employee Management
<!-- ABOUT THE PROJECT -->
## Description of the project

this is about a frontend website for final project it is about an employee have some tasks and the user can display a list of employee that can be modified or deleted also 
you can click on the details button to show more details about the employee 
the new employee page it is allow the user to create a new employee on the list and database , the last page it is list of task assigned to employee from the database 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Class Diagram
In the diagram, the Employees class has a one-to-many relationship with the Task class through the tasks attribute. This means that an employee can be associated with multiple tasks, and a task can be assigned to one employee
![Model](/Users/jawahermut/Documents/classDia.png)

## SetUp
The setUp for the project is need to follow the following steps:
* install Angular
* Create component
* set the router
* set service
* create logic for retrieving, deleting, modifying

## Technologies Used
* [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html): The programming language used for the backend development.
* [IntelliJ IDEA](https://www.jetbrains.com/idea/): An integrated development environment (IDE) used for Java application development.
* [Spring Boot](https://start.spring.io/): A Java framework used for building the application, handling dependency injection, and providing various features for web development
* Postman: A tool for testing and documenting APIs, used for testing the API endpoints during development.
* Maven: A build automation tool used for managing dependencies and building the project.
* [Visual studio code](https://code.visualstudio.com/docs/sourcecontrol/intro-to-git):a popular source code editor developed by Microsoft. It is available for Windows, macOS, and Linux and provides a lightweight yet powerful environment for writing, editing, and debugging code across various programming languages.
* [Angular](https://angular.io/): is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications.

 ## Controllers and Routes structure
## Employee Controller
EmployeeController class that handles various routes related to employees in an API. Here's an explanation of the structure and purpose of each controller method with examples of available routes and their functionalities:
* getAllEmployees() - GET request to retrieve all employees:
- Route: /api/employee
- Functionality: Returns a list of all employees available in the system.
- Example: Sending a GET request to /api/employee will retrieve all employees.

* getEmployeeById(Integer id) - GET request to retrieve an employee by their ID:
- Route: /api/employee/{id}
- Functionality: Returns the employee with the specified id.
- Example: Sending a GET request to /api/employee/1 will retrieve the employee with ID 1.

* saveEmployee(Employee employee) - POST request to create a new employee:
- Route: /api/employee
- Functionality: Saves the new employee object in the database.
- Example: Sending a POST request to /api/employee with a JSON payload containing employee data will create a new employee.

* updateEmployee(Employee employee, Integer id) - PUT request to update an employee:
- Route: /api/employee/{id}
- Functionality: Updates the employee with the specified id using the employee object.
- Example: Sending a PUT request to /api/employee/1 with a JSON payload containing the updated employee data will update the employee.

* deleteEmployee(Integer id) - DELETE request to delete an employee:
- Route: /api/employee/{id}
- Functionality: Deletes the employee with the specified id from the database.
- Example: Sending a DELETE request to /api/employee/1 will delete the employee with ID 1.
## Task Controller
class that handles various routes related to tasks in an API. Here's an explanation of the structure and purpose of each controller method with examples of available routes and their functionalities:
* getAllTask() - GET request to retrieve all tasks:
- Route: /api/employee/task
- Functionality: Returns a list of all tasks available in the system.
- Example: Sending a GET request to /api/employee/task will retrieve all tasks.

## Back-end Project
[Backend-Project](https://github.com/jawahermut/midProject.git)
## Presentation
[Presentation](https://www.canva.com/design/DAFytBRB1bc/_LAwK2pa1YH4HjFw6TTQbg/view?utm_content=DAFytBRB1bc&utm_campaign=designshare&utm_medium=link&utm_source=editor)

## Future Work
Authentication and Authorization: Implement a secure authentication mechanism, such as JWT (JSON Web Tokens), to protect the API endpoints and restrict access to authorized users only. This can involve user registration, login/logout functionality, and role-based access control
