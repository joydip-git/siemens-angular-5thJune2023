import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { FilterItemsComponent } from './components/filter-items/filter-items.component';
import { Routes, RouterModule } from '@angular/router';
//import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { PRODUCT_SERVICE_TOKEN, SERVICE_TYPE } from '../constants/app-constants';
import { AlternateTemplateComponent } from './components/alternate-template/alternate-template.component';
import { StorageService } from './services/storage.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
        path: 'update', component: UpdateProductComponent
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
    FilterItemsComponent,
    AlternateTemplateComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(productRoutes), HttpClientModule, ReactiveFormsModule, FormsModule
  ],
  providers: [
    // ProductService
    {
      provide: PRODUCT_SERVICE_TOKEN,
      useClass: SERVICE_TYPE
    },
    StorageService
  ]
})
export class ProductsModule { }
