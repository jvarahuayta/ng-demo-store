import { Injectable } from '@angular/core';
import { IAsyncUsecase } from '../../../shared/usecases/usecase';
import { ProductsStore } from '../../../common/products/stores/products-store';

@Injectable({ providedIn: 'root' })
export class AppAdminLoadProductsUsecase implements IAsyncUsecase<void, void> {
  constructor(private productsStore: ProductsStore) {}

  async execute(): Promise<void> {
    //TODO load products from somewhere
  }
}
