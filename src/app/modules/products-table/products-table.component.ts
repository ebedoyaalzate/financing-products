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
  productsAmount: Number = 0;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
      this.productsAmount = products.length
    });
  }
}
