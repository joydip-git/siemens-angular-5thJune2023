import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "src/app/models/product";

@Injectable()
export class StorageService {

    private storage = new BehaviorSubject<Product | undefined>(undefined);
    private storageObservable = this.storage.asObservable()

    publish(p: Product) {
        this.storage.next(p)
    }
    getPublishedData() {
        return this.storageObservable
    }
}