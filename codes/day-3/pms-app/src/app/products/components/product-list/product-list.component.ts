import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  //providers: [ProductService]
})
export class ProductListComponent {
  //private ps?: ProductService;
  products?: Product[];

  constructor(private ps: ProductService) {
    // this.ps = ps
    //this.products = this.ps.getProducts()
  }
}
