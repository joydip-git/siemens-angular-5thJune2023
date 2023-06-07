import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { FilterItemsComponent } from './components/filter-items/filter-items.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';

const productRoutes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '', component: ProductListComponent
      },
      {
        path: 'add', component: AddProductComponent
      },
      {
        path: 'view/:id', component: ProductDetailComponent
      },
      {
        path: 'update/:id', component: UpdateProductComponent
      }
    ]
  }
]

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
    CommonModule, RouterModule.forChild(productRoutes), HttpClientModule
  ],
  providers: [ProductService]
})
export class ProductsModule { }
