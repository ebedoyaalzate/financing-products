import { Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {Product} from './../../types/products';
import {ProductsService} from './../../services/products/products.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
})
export class ProductsTableComponent implements OnInit {
  products: Product[] = [];
  pagination: number = 5;
  searchValue: string = '';

  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  addProduct() {
    this.router.navigate(['add-product']);
  }
}
