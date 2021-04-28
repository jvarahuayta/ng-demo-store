import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppAdminRoutes } from '../../app-constants/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleLogin() {
    this.router.navigate([AppAdminRoutes.backoffice]);
  }
}
