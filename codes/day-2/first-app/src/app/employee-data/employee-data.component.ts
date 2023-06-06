import { Component } from "@angular/core";
import { Employee } from "../models/employee";

@Component({
    selector: 'app-employee-data',
    templateUrl: './employee-data.component.html'
})
export class EmployeeDataComponent {
    employeeObj: Employee[] = [
        { designation: "manager", id: 1, name: 'anil', salary: 1000 },
        { designation: "developer", id: 2, salary: 2000, name: 'sunil' },
        { designation: "manager", id: 3, name: 'venkat', salary: 3000 },
        { designation: "developer", id: 4, salary: 4000, name: 'suresh' }
    ]

    resultSet: { key: string, list: Employee[] }[] = []

    constructor() {
        const dictionary: Map<string, Employee[]> = new Map<string, Employee[]>()
        this.employeeObj.forEach(
            (e) => {
                dictionary.set(e.designation, this.employeeObj.filter(e1 => e1.designation === e.designation))
            }
        )
        for (const d of dictionary) {
            this.resultSet.push({ key: d[0], list: d[1] })
        }
        console.log(this.employeeObj)
    }

    reciveUpdatedObject(updated: Employee) {
        const index = this.employeeObj.findIndex(e => e.id === updated.id)
        if (index >= 0) {
            this.employeeObj.splice(index, 1, updated)
        }
        console.log(this.employeeObj)
    }
}