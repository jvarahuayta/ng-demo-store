import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppAdminRoutes } from '../../app-constants/routes';
import { AuthLogoutUsecase } from '../../auth/usecases/logout-usecase';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss'],
})
export class BackofficeComponent implements OnInit {
  constructor(
    private logoutUsecase: AuthLogoutUsecase,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleLogout(): void {
    this.logoutUsecase.execute();
    this.router.navigate([AppAdminRoutes.login]);
  }
}
