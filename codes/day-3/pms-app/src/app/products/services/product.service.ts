import { Injectable } from "@angular/core";
import { Product } from "../../models/product";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { ApiResponse } from "src/app/models/api-response";

@Injectable()
export class ProductService {
    private url = 'http://127.0.0.1:3003/products'
    constructor(private _http: HttpClient) {

    }

    getProducts(): Observable<ApiResponse<Product[]>> {
        //send an HTTP request asynchornously
        //return this._http.get<ApiResponse<Product[]>>(this.url)
        const obs = this._http.get(this.url)
        const obsOfProducts = obs.pipe(
            map(
                (resp: any): ApiResponse<Product[]> => {
                    return {
                        message: resp.message,
                        data: resp.data.map(
                            (p: any): Product => {
                                return {
                                    productId: p.productId,
                                    productName: p.productName,
                                    price: p.price,
                                    imageUrl: p.imageUrl,
                                    starRating: p.starRating,
                                    description: p.description,
                                    productCode: p.productCode,
                                    releaseDate: p.releaseDate
                                }
                            }
                        )
                    }
                }
            )
        )
        return obsOfProducts
    }
}