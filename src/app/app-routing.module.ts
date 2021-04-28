import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAdminRoutes } from './admin/app-constants/routes';
import { AppCustomerRoutes } from './customer/app-constants/routes';

const routes: Routes = [
  {
    path: AppAdminRoutes.login,
    loadChildren: () =>
      import('./admin/app-pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: AppAdminRoutes.backoffice,
    loadChildren: () =>
      import('./admin/app-pages/backoffice/backoffice.module').then(
        (m) => m.BackofficeModule
      ),
  },
  {
    path: AppCustomerRoutes.shell,
    pathMatch: 'full',
    loadChildren: () =>
      import('./customer/app-pages/shell/shell.module').then(
        (m) => m.ShellModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
