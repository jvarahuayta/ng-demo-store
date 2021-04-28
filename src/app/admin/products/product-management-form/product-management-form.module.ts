import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementFormComponent } from './product-management-form.component';
import { CommonAppSharedFormsModule } from '../../../shared/forms/forms.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [ProductManagementFormComponent],
  imports: [
    CommonModule,
    CommonAppSharedFormsModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  exports: [ProductManagementFormComponent],
})
export class ProductManagementFormModule {}
