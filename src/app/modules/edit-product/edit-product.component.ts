import { ProductsService } from './../../services/products/products.service';
import {Product} from './../../types/products';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  product: Product | null = null;

  constructor(
    private router: Router,
    private productsService: ProductsService,
  ) {
    this.product = this.router?.getCurrentNavigation()?.extras.state as Product;
  }

  ngOnInit() {}

  editProduct(product: Product) {
    this.productsService.updatedProduct(product).subscribe(res => {
      this.router.navigate(['']);
    });
  }
}
