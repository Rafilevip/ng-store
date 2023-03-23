import { Component, OnInit } from '@angular/core';
import { Productyervice } from 'src/app/product/services/product.service';
import { IProduct } from 'src/app/shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public products: IProduct[] = [];

  constructor(private productService: Productyervice) {}

  ngOnInit() {
    this.productService.getProducts$().subscribe((data: any) => {
      console.log(data['products']);
      this.products = data['products'];
    });
    this.productService.fetchProducts();
  }

  ngonDestroy(): void {}
}
