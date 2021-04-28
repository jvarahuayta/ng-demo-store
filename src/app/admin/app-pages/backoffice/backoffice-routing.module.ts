import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAdminRoutes } from '../../app-constants/routes';
import { BackofficeComponent } from './backoffice.component';

const routes: Routes = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      {
        path: AppAdminRoutes.products,
        loadChildren: () =>
          import('../products-list/products-list.module').then(
            (mod) => mod.ProductsListModule
          ),
      },
      {
        path: AppAdminRoutes.productCreate,
        loadChildren: () =>
          import('../product-details/product-details.module').then(
            (mod) => mod.ProductDetailsModule
          ),
      },
      {
        path: AppAdminRoutes.productEdit,
        loadChildren: () =>
          import('../product-details/product-details.module').then(
            (mod) => mod.ProductDetailsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackofficeRoutingModule {}
