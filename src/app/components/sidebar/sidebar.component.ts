import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() isOpen: boolean = false;
  @Output() onCloseSidebar: EventEmitter<void> = new EventEmitter();
  public closeSidebar(): void {
    this.onCloseSidebar.emit();
  }
}
