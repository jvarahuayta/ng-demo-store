import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../../common/products/models/product-model';
import { ProductsQuery } from '../../../common/products/stores/products-query';
import { DeleteProductUsecase } from '../../products/usecases/delete-product-usecase';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products$: Observable<ProductModel[]>;

  constructor(
    private readonly productQuery: ProductsQuery,
    private deleteProductUsecae: DeleteProductUsecase
  ) {
    this.products$ = this.productQuery.selectAll();
  }

  ngOnInit(): void {}

  handleDelete(product: ProductModel): void {
    if (confirm(`Desea eliminar el producto ${product.name}`)) {
      this.deleteProductUsecae.execute(product.id as string).subscribe();
    }
  }
}
