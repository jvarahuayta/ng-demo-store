import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductsStore } from '../../../common/products/stores/products-store';
import { IObservableUsecase } from '../../../shared/usecases/usecase';

@Injectable({ providedIn: 'root' })
export class LikeProductUsecase implements IObservableUsecase<string, void> {
  constructor(private productsStore: ProductsStore) {}
  execute(request: string): Observable<void> {
    this.productsStore.update(request, (entity) => ({
      ...entity,
      likes: ((entity.likes as number) || 0) + 1,
    }));
    return of();
  }
}
