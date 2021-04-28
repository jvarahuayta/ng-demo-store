import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormModule } from '../../auth/login-form/login-form.module';
import { PageModule } from '../../../shared/page/page.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginFormModule,
    LoginRoutingModule,
    MatCardModule,
    PageModule,
  ],
})
export class LoginModule {}
