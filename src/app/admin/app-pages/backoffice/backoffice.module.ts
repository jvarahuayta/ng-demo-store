import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PageModule } from '../../../shared/page/page.module';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';

@NgModule({
  declarations: [BackofficeComponent],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    MatToolbarModule,
    PageModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class BackofficeModule {}
