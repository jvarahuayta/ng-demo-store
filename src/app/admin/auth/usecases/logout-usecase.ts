import { Injectable } from '@angular/core';
import { JwtStore } from '../../../common/auth/stores/jwt-store';
import { IUsecase } from '../../../shared/usecases/usecase';

@Injectable({ providedIn: 'root' })
export class AuthLogoutUsecase implements IUsecase<void, void> {
  constructor(private jwt: JwtStore) {}
  execute(request: void): void {
    this.jwt.update((_) => ({
      token: null,
    }));
  }
}
