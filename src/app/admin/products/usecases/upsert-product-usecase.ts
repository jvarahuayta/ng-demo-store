import { Injectable } from '@angular/core';
import { omit } from 'lodash-es';
import { from, Observable, of } from 'rxjs';
import { mapTo, switchMap, tap } from 'rxjs/operators';
import { v1 as uuid } from 'uuid';
import { ProductModel } from '../../../common/products/models/product-model';
import { ProductsStore } from '../../../common/products/stores/products-store';
import { IObservableUsecase } from '../../../shared/usecases/usecase';
import { fileToDataURL } from '../../../shared/utils/file-util';

type UpsertProductUsecaseReq = Omit<ProductModel, 'portraitUrl'> & {
  portraitFile: File;
};

@Injectable({ providedIn: 'root' })
export class UpsertProductUsecase
  implements IObservableUsecase<UpsertProductUsecaseReq, ProductModel> {
  constructor(private productsStore: ProductsStore) {}
  execute(request: UpsertProductUsecaseReq): Observable<ProductModel> {
    const entity: ProductModel = { ...omit(request, ['portraitFile']) };
    if (request.portraitFile) {
      entity.portraitUrl = URL.createObjectURL(request.portraitFile);
    }
    if (!request.id) {
      entity.id = uuid();
      this.productsStore.add({ ...entity });
    } else {
      this.productsStore.update(request.id, (_) => ({
        ..._,
        ...entity,
      }));
    }
    return of(entity).pipe(
      switchMap(() =>
        !request.portraitFile
          ? of(entity)
          : from(fileToDataURL(request.portraitFile)).pipe(
              tap((portraitUrl) => {
                entity.portraitUrl = portraitUrl;
                this.productsStore.update(entity.id as string, {
                  portraitUrl: entity.portraitUrl,
                });
              }),
              mapTo(entity)
            )
      )
    );
  }
}
