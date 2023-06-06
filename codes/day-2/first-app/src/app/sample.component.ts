import { Component } from "@angular/core";

@Component({
    selector: 'app-sample',
    template: `<h2>
        Sample
        </h2>
        `
})
export class SampleComponent {
    constructor() {
        console.log('Sample component created')
    }
}