import {Router} from '@angular/router';
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
  openModal: boolean = false;
  deleteProduct: Product | null = null;

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

  edit(product: Product) {
    this.router.navigate(['edit-product'], {state: product});
  }

  delete(product: Product) {
    this.openModal = true;
    this.deleteProduct = product;
  }

  closeModal(e: any) {
    this.openModal = false;
  }

  confirmDelete($event: boolean) {
    this.productsService
      .deleteProduct(this.deleteProduct?.id || '')
      .subscribe(res => {
        this.closeModal(true)
      });
  }
}
