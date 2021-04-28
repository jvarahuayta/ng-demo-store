import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface JwtState {
  token?: string;
}

export function createInitialState(): JwtState {
  return {};
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'jwt' })
export class JwtStore extends Store<JwtState> {
  constructor() {
    super(createInitialState());
  }
}
