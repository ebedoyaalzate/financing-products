import { Product } from './../../types/products';
import {ProductsService} from './../../services/products/products.service';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  @Output() submitProduct = new EventEmitter<Product>();

  form: FormGroup = this.fb.group({
    id: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200),
    ]),
    logo: new FormControl('', [Validators.required]),
    date_release: new FormControl('', [Validators.required]),
    date_revision: new FormControl('', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
  ) {}

  ngOnInit() {}

  onSubmit(form: FormGroup) {
    this.productsService.validateId(form.value.id).subscribe(exists => {
      if (exists) {
        this.form.controls['id'].setErrors({exists: true});
      } else {
        this.productsService.addProduct(form.value).subscribe(res => {
          this.submitProduct.emit(form.value)
        });
      }
    });
  }

  checkInput(input: string) {
    return this.form.get(input)?.invalid && this.form.get(input)?.touched;
  }

  getMessageError(input: string, name: string) {
    const errors = this.form.get(input)?.errors;
    if (errors && errors['required']) {
      return 'Este campo es requerido';
    } 
    return `${name} invalido!`;
  }
}
