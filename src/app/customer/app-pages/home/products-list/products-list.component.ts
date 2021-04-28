import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../../../common/products/models/product-model';
import { ProductsQuery } from '../../../../common/products/stores/products-query';
import { LikeProductUsecase } from '../../../products/usecases/like-product-usecase';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
  products$: Observable<ProductModel[]>;

  constructor(
    productsQuery: ProductsQuery,
    private likeProductUsecase: LikeProductUsecase
  ) {
    this.products$ = productsQuery.selectAll();
  }

  ngOnInit(): void {}

  handleLike(product: ProductModel) {
    this.likeProductUsecase.execute(product.id as string);
  }
}
