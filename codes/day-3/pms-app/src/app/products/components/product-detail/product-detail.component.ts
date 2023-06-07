import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { PRODUCT_SERVICE_TOKEN } from 'src/app/constants/app-constants';
import { IService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import { Product } from 'src/app/models/product';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private productSubscription?: Subscription;
  errorMessage = ''
  loaded = false
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    @Inject(PRODUCT_SERVICE_TOKEN) private ps: IService,
    private storageSvc: StorageService
  ) {

  }
  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe()
  }
  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot
    const id = +snapshot.params['id']
    this.productSubscription =
      this.ps
        .getProductById(id)
        .subscribe({
          next: (resp: ApiResponse<Product | null>) => {
            if (resp.data === null) {
              this.product = undefined
              this.errorMessage = resp.message
              this.loaded = true
            } else {
              this.product = resp.data
              this.errorMessage = ''
              this.loaded = true
            }
          },
          error: (err: Error) => {
            this.product = undefined
            this.errorMessage = err.message
            this.loaded = true
          },
          complete: () => {
            if (this.product) {
              this.storageSvc.publish(this.product)
            }
          }
        })
  }
}
