import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `<h2>
        Welcome to Angular       
        </h2>
         <app-sample></app-sample>
        `
})
export class AppComponent {
    constructor() {
        console.log('App component created')
    }
}