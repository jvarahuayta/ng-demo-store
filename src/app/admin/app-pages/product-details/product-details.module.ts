import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { CommonAppSharedFormsModule } from '../../../shared/forms/forms.module';
import { ProductManagementFormModule } from '../../products/product-management-form/product-management-form.module';
import { MatCardModule } from '@angular/material/card';
import { PageModule } from '../../../shared/page/page.module';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    CommonAppSharedFormsModule,
    ProductManagementFormModule,
    MatCardModule,
    PageModule,
  ],
})
export class ProductDetailsModule {}
