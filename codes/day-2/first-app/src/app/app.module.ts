import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CalculatorComponent } from "./calculator/calculator.component";
import { EmployeeDataComponent } from "./employee-data/employee-data.component";

@NgModule({
    //register components, directives and pipes
    declarations: [AppComponent, CalculatorComponent, EmployeeDataComponent],
    //register providers for services
    providers: [],
    //register built-in or application feature modules
    imports: [BrowserModule],
    //mention which components, directives, pipes and modules should be exported outside of this module
    exports: [],
    //choose your bootstrapper component(s)
    bootstrap: [AppComponent]

})
export class AppModule {
    constructor() {
        console.log('App module created')
    }
}