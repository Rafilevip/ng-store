import { Component, Input, ViewChild } from '@angular/core';
import { Productyervice } from 'src/app/product/services/product.service';
import { IProduct } from 'src/app/shared/models/product.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormComponent } from 'src/app/shared/components/product-form/product-form.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(
    private productService: Productyervice,
    public dialog: MatDialog
  ) {}

  public dataSource: MatTableDataSource<IProduct> = new MatTableDataSource();

  public displayedColumns: String[] = [];

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  ngOnInit() {
    this.productService.getProducts$().subscribe((data: any) => {
      this.displayedColumns = [
        'id',
        'title',
        'price',
        'description',
        'image',
        'menu',
      ];
      console.log(data['products']);
      this.dataSource = new MatTableDataSource(data['products']);
      if (this.sort) this.dataSource.sort = this.sort;
      if (this.paginator) this.dataSource.paginator = this.paginator;
    });
    this.productService.fetchProducts();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngonDestroy(): void {}

  ngAfterViewInit() {
    // this part MUST be done in afterviewinit
    if (this.sort) this.dataSource.sort = this.sort;
    if (this.paginator) this.dataSource.paginator = this.paginator;
  }

  removeCart(product: IProduct) {
    const index = this.dataSource.data.findIndex((el) => {
      return (el.id = product.id);
    });
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductFormComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
