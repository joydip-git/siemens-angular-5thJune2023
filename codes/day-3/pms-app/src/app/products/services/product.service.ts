import { Injectable } from "@angular/core";
import { Product } from "../../models/product";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { ApiResponse } from "src/app/models/api-response";

export interface IService {
    getProducts(): Observable<ApiResponse<Product[]>>;
    getProductById(id: number): Observable<ApiResponse<Product | null>>;
    addProduct(p: Product): Observable<ApiResponse<Product[] | null>>;
    updateProduct(p: Product): Observable<ApiResponse<Product[] | null>>;
    deleteProduct(id: number): Observable<ApiResponse<Product[] | null>>;
}

@Injectable()
export class ProductService implements IService {
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

    getProductById(id: number): Observable<ApiResponse<Product | null>> {
        return this._http.get<ApiResponse<Product | null>>(`${this.url}/${id}`)
    }
    addProduct(p: Product): Observable<ApiResponse<Product[] | null>> {
        return this._http.post<ApiResponse<Product[] | null>>(this.url, p)
    }
    updateProduct(p: Product): Observable<ApiResponse<Product[] | null>> {
        return this._http.put<ApiResponse<Product[] | null>>(`${this.url}/${p.productId}`, p)
    }
    deleteProduct(id: number): Observable<ApiResponse<Product[] | null>> {
        return this._http.delete<ApiResponse<Product[] | null>>(`${this.url}/${id}`)
    }
}