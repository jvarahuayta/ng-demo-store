import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PageModule } from '../../../shared/page/page.module';
import { BypassSecurityTrustUrlPipeModule } from '../../../shared/pipes/bypass-security-trust-url/bypass-security-trust-url.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [HomeComponent, ProductsListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PageModule,
    MatCardModule,
    BypassSecurityTrustUrlPipeModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
  ],
})
export class HomeModule {}
