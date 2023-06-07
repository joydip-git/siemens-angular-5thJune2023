import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PmsCommonModule } from './pms-common/pms-common.module';
import { ProductsModule } from './products/products.module';
import { RouterModule } from '@angular/router';
import { ProductService } from './products/services/product.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ProductsModule, PmsCommonModule, RouterModule
  ],
  //providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
