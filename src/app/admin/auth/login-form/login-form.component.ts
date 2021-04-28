import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthLoginUsecase } from '../usecases/login-usecase';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
  loginFG: FormGroup;
  @Output() login = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private loginUsecase: AuthLoginUsecase,
    private snackbar: MatSnackBar
  ) {
    this.loginFG = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  async handleSubmit(): Promise<void> {
    if (this.loginFG.invalid) {
      return;
    }
    this.loginUsecase
      .execute({
        email: this.loginFG.value.email,
        password: this.loginFG.value.password,
      })
      .subscribe({
        next: () => {
          this.login.emit();
        },
        error: () => {
          this.snackbar.open('Credenciales inválidas');
        },
      });
  }
}
