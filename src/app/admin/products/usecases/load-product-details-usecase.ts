import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { ProductModel } from '../../../common/products/models/product-model';
import { ProductsQuery } from '../../../common/products/stores/products-query';
import { IObservableUsecase } from '../../../shared/usecases/usecase';

@Injectable({ providedIn: 'root' })
export class LoadProductDetailsUsecase
  implements IObservableUsecase<string, ProductModel | undefined> {
  constructor(private productsQuery: ProductsQuery) {}
  execute(request: string): Observable<ProductModel | undefined> {
    return this.productsQuery.selectEntity(request).pipe(first());
  }
}
