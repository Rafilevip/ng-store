import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
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

  private productsSubjects$: Subject<IProduct[]> = new Subject();

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

  // public getProducts(): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>(Routes['allProducts']);
  // }
  public getProductsById(id: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(Routes['singleProduct'](id));
  }
}
