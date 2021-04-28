import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PageModule } from '../../../shared/page/page.module';
import { BypassSecurityTrustUrlPipeModule } from '../../../shared/pipes/bypass-security-trust-url/bypass-security-trust-url.module';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    ProductsListRoutingModule,
    MatCardModule,
    MatIconModule,
    PageModule,
    BypassSecurityTrustUrlPipeModule,
  ],
})
export class ProductsListModule {}
