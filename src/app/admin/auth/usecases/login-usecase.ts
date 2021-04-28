import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IObservableUsecase } from '../../../shared/usecases/usecase';
import { JwtStore } from '../../../common/auth/stores/jwt-store';

interface AuthLoginUsecaseReq {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthLoginUsecase
  implements IObservableUsecase<AuthLoginUsecaseReq, boolean> {
  constructor(private jwtStore: JwtStore) {}

  execute(request: AuthLoginUsecaseReq): Observable<boolean> {
    if (request.email === 'admin@gmail.com' && request.password === 'admin') {
      this.jwtStore.update({ token: 'xxx' });
      return of(true);
    }
    return throwError('invalid-credentials');
  }
}
