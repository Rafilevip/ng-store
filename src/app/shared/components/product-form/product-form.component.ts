import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Productyervice } from 'src/app/product/services/product.service';
import { IProduct } from '../../models';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  public productForm?: FormGroup = new FormGroup({});
  @Input() set product(product: IProduct) {
    debugger;
    console.log(product);
    if (this.productForm) {
      this.prePoulateFrom(product);
    }
    this._product = product;
  }
  prePoulateFrom(product: IProduct): void {
    this.productForm.patchValue({
      title: product.title,
      stock: product.stock,
      price: product.price,
      rating: product.rating,
      thumbnail: product.thumbnail,
      description: product.description,
      category: product.category,
      brand: product.brand,
    });
  }
  private _product: IProduct;

  get product(): IProduct {
    return this._product;
  }

  ngOnInit() {
    this.initForm(this.product);
  }
  initForm(product?: IProduct): void {
    this.productForm = new FormGroup({
      title: new FormControl(product.title, [Validators.required]),
      stock: new FormControl(product.stock, [Validators.required]),
      price: new FormControl(product.price, [Validators.required]),
      rating: new FormControl(product.rating, [Validators.required]),
      thumbnail: new FormControl(product.thumbnail, [Validators.required]),
      description: new FormControl(product.description, [Validators.required]),
      category: new FormControl(product.category, [Validators.required]),
      brand: new FormControl(product.brand, [Validators.required]),
    });
  }
  public onSubmit() {
    console.log(this.productForm);
  }
}
