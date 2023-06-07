import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PmsCommonModule } from './pms-common/pms-common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PmsCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
