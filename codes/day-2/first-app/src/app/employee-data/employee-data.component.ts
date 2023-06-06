import { Component } from "@angular/core";
import { Employee } from "../models/employee";

@Component({
    selector: 'app-employee-data',
    templateUrl: './employee-data.component.html'
})
export class EmployeeDataComponent {
    employeeObj?: Employee[] = [
        { id: 1, name: 'anil', salary: 1000 },
        { id: 2, salary: 2000, name: 'sunil' }
    ]

    // iterate() {
    //     for (let obj of this.employeeObj) {
    //         console.log(obj.)
    //     }
    // }
}