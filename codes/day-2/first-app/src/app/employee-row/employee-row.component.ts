import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Employee } from "../models/employee";

@Component({
    selector: 'app-employee-row',
    templateUrl: './employee-row.component.html'
})
export class EmployeeRowComponent {
    @Input('designation') designationName: string = ''
    @Input('records') employees: Employee[] = []
    @Output() employeeUpdated = new EventEmitter<Employee>()

    nameChanged(newName: string, id: number) {
        const found = this.employees.find(e => e.id === id)
        if (found) {
            let copy: Employee = {
                ...found,
                name: newName
            }
            this.employeeUpdated.emit(copy)
        }
    }
    salaryChanged(newSalary: string, id: number) {
        const found = this.employees.find(e => e.id === id)
        if (found) {
            let copy: Employee = {
                ...found,
                salary: +newSalary
            }
            this.employeeUpdated.emit(copy)
        }
    }
}