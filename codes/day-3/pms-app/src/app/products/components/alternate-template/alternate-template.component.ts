import { Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-alternate-template',
    template: `<span>No record found...</span>`
})

export class AlternateTemplateComponent implements OnDestroy {
    constructor() {
        console.log('al created')
    }
    ngOnDestroy(): void {
        console.log('al destroyed')
    }

}