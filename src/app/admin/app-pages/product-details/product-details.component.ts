import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppAdminRoutes } from '../../app-constants/routes';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private router: Router, public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  handleSuccess(): void {
    this.router.navigate([
      `${AppAdminRoutes.backoffice}/${AppAdminRoutes.products}`,
    ]);
  }
}
