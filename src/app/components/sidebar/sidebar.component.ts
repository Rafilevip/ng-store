import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductFormComponent } from 'src/app/shared/components/product-form/product-form.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public dialog: MatDialog) {}

  @Input() isOpen: boolean = false;
  @Output() onCloseSidebar: EventEmitter<void> = new EventEmitter();
  public closeSidebar(): void {
    this.onCloseSidebar.emit();
  }

  public moveToLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
