import {Product} from './../../types/products';
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  constructor(private router: Router) {}

  addProduct(product: Product) {
    this.router.navigate(['']);
  }
}
