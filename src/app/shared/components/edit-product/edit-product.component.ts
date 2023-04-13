import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Productyervice } from 'src/app/product/services/product.service';
import { IProduct } from '../../models';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  private sub: Subscription = new Subscription();
  public product?: IProduct;

  constructor(
    private route: ActivatedRoute,
    private productService: Productyervice
  ) {}

  ngOnInit(): void {
    debugger;
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.productService.getProductsById(Number(id));
    console.log(this.product);

    // setTimeout(() => {
    //   this.product = this.productService.getProductsById(19);
    // }, 4000);
  }
  ngOnDestroy() {
    console.log('');
    this.sub.unsubscribe();
  }
}
