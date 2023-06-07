import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { IService } from '../../services/product.service';
import { Product } from 'src/app/models/product';
import { PRODUCT_SERVICE_TOKEN } from 'src/app/constants/app-constants';
import { Subscription } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  //providers: [ProductService]
})
export class ProductListComponent implements OnDestroy, OnInit {

  products?: Product[];
  errorMessage = ''
  loaded = false

  private productSubscription?: Subscription;

  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private ps: IService) {
  }
  ngOnInit(): void {
    this.productSubscription =
      this.ps
        .getProducts()
        .subscribe({
          next: (resp: ApiResponse<Product[]>) => {
            this.products = resp.data
            this.errorMessage = ''
            this.loaded = true
          },
          error: (err: Error) => {
            this.products = undefined
            this.errorMessage = err.message
            this.loaded = true
          }
        })
  }
  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe()
  }
}
