import { Injectable } from '@angular/core';
import { IUsecase } from '../../../shared/usecases/usecase';

@Injectable({ providedIn: 'root' })
export class AuthLogoutUsecase implements IUsecase<void, void> {
  constructor() {}
  execute(request: void): void {}
}
