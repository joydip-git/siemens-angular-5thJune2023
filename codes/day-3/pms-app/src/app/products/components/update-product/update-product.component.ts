import { Component, OnDestroy, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit, OnDestroy {
  private productSubscription?: Subscription;
  errorMessage = ''
  loaded = false
  product?: Product;

  formObj?: FormGroup;

  constructor(private storageService: StorageService) {

  }
  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe()
  }
  ngOnInit(): void {
    this.productSubscription =
      this.storageService
        .getPublishedData()
        .subscribe({
          next: (data: Product | undefined) => {
            if (data === undefined) {
              this.product = undefined
              this.errorMessage = 'no product found in storage'
              this.loaded = true
            } else {
              this.product = data
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
              this.formObj = new FormGroup({
                productId: new FormControl(this.product?.productId),
                productName: new FormControl(this.product?.productName)
              })
            }
          }
        })
  }
  update() {
    //this.formObj?.get('productId')?.value
    this.formObj?.value
  }

}
