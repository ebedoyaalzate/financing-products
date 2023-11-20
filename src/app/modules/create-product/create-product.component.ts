import {ProductsService} from './../../services/products/products.service';
import {Product} from './../../types/products';
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  existId: boolean = false;
  constructor(
    private router: Router,
    private productsService: ProductsService,
  ) {}

  addProduct(product: Product) {
    this.productsService.validateId(product.id).subscribe(exists => {
      if (exists) {
        this.existId = true;
      } else {
        this.productsService.addProduct(product).subscribe(res => {
          this.router.navigate(['']);
        });
      }
    });
  }
}
