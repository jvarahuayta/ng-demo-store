import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtStore } from '../../common/auth/stores/jwt-store';
import { AppAdminRoutes } from '../app-constants/routes';

@Injectable({
  providedIn: 'root',
})
export class BackofficeGuard implements CanActivate {
  constructor(private jwt: JwtStore, private router: Router) {}
  canActivate(): boolean {
    if (!this.jwt.getValue().token) {
      this.router.navigate([AppAdminRoutes.login]);
      return false;
    }
    return true;
  }
}
