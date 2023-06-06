import { Component } from "@angular/core";

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html'
})
export class CalculatorComponent {
    title = "Simple Calculator"
    first = 0
    second = 0
    result = 0
    width = 200
    constructor() {
        console.log('Calculator component created')
    }
    updateFirst(data: string) {
        this.first = Number(data)
    }
    updateSecond(data: string) {
        this.second = Number(data)
    }
    add() {
        this.result = this.first + this.second
    }
}