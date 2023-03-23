import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, SharedModule, MaterialModule, AppRoutingModule],
  // exports: [AdminComponent],
})
export class AdminModule {}
