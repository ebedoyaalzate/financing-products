import { dummyProducts } from 'src/test/mocks/products';
import {Component, OnChanges, OnInit} from '@angular/core';

import {Product} from './../../types/products';
import {ProductsService} from './../../services/products/products.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
})
export class ProductsTableComponent implements OnInit, OnChanges {
  products: Product[] = [];
  pagination: number = 5;
  searchValue: string = '';

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe(products => {
      this.products = dummyProducts;
    });
  }
  

  ngOnChanges(e: any) {
    console.log(e)
  }
}
