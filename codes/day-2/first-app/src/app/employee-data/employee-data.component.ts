import { Component } from "@angular/core";

@Component({
    selector: 'app-employee-data',
    templateUrl: './employee-data.component.html'
})
export class EmployeeDataComponent {
    employeeObj = { id: 1, salary: 2000, name: 'anil' }
}