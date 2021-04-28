import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonAppSharedFormsModule } from '../../../shared/forms/forms.module';
import { LoginFormComponent } from './login-form.component';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule, CommonAppSharedFormsModule, MatSnackBarModule],
  exports: [LoginFormComponent],
})
export class LoginFormModule {}
