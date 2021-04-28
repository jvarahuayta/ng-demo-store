import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductsStore } from '../../../common/products/stores/products-store';
import { IObservableUsecase } from '../../../shared/usecases/usecase';

@Injectable({ providedIn: 'root' })
export class DeleteProductUsecase
  implements IObservableUsecase<string, boolean> {
  constructor(private productsStore: ProductsStore) {}
  execute(request: string): Observable<boolean> {
    this.productsStore.remove(request);
    return of(true);
  }
}
