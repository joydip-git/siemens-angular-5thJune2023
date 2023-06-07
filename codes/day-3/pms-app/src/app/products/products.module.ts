import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { FilterItemsComponent } from './components/filter-items/filter-items.component';



@NgModule({
  declarations: [
    AddProductComponent,
    UpdateProductComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductTableComponent,
    FilterItemsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
