import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productyervice } from 'src/app/product/services/product.service';
import { IProduct } from '../../models';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  public product: IProduct[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: Productyervice
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductsById(Number(id)).subscribe((data: any) => {
      console.log(data.id);
      this.product = data.thumbnail;
    });
  }
}
