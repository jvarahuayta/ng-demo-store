import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { ProductModel } from '../models/product-model';

export interface ProductsState extends EntityState<ProductModel, string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'products' })
export class ProductsStore extends EntityStore<ProductsState> {
  constructor() {
    super({});
  }
}
