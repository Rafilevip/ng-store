import { trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Routes } from 'src/app/core/http/Api';
import { StorageService } from 'src/app/core/srevices/storage.service';
import { IProduct } from 'src/app/shared/models';
import { PRODUCTS_MOCK } from './products.mock';

@Injectable({
  providedIn: 'root',
})
export class Productyervice {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  // private productsSubjects$: Subject<IProduct[]> = new Subject();

  private productsSubjects$: BehaviorSubject<IProduct[]> = new BehaviorSubject(
    []
  );

  public getProducts$(): Observable<IProduct[]> {
    this.fetchProducts();
    return this.productsSubjects$.asObservable();
  }

  public fetchProducts(): void {
    const existingData: IProduct[] = this.storageService.getData('products');
    if (existingData) {
      this.productsSubjects$.next(existingData);
    } else {
      this.http.get<IProduct[]>(Routes['allProducts']).subscribe((data) => {
        this.storageService.setData('products', data);
        this.productsSubjects$.next(data);
      });
    }
  }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(Routes['allProducts']);
  }
  // public getProductsById(id: number): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>(Routes['singleProduct'](id));
  // }

  public getProductsById(id: number): IProduct {
    this.fetchProducts();
    const productList: any = this.productsSubjects$.value;
    const productIndex: number = productList.products.findIndex(
      (product) => product.id === id
    );
    if (productList.products[productIndex]) {
      return productList.products[productIndex];
    } else {
      return null;
    }
  }
}
