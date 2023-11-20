import {Product} from './../../types/products';
import {ProductsService} from './../../services/products/products.service';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, OnChanges {
  @Output() submitProduct = new EventEmitter<Product>();

  @Input() existId: boolean = false;
  @Input() product: Product | null = null;

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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.product?.id) {
      this.form.get('id')?.setValue(this.product.id);
      this.form.get('id')?.disable()
      this.form.get('name')?.setValue(this.product.name);
      this.form.get('description')?.setValue(this.product.description);
      this.form.get('logo')?.setValue(this.product.logo);
      this.form
        .get('date_release')
        ?.setValue(formatDate(this.product.date_release, 'yyyy-MM-dd', 'en'));
      this.form
        .get('date_revision')
        ?.setValue(formatDate(this.product.date_revision, 'yyyy-MM-dd', 'en'));
    }
  }

  ngOnChanges() {
    this.form.controls['id'].setErrors({exists: this.existId});
  }

  onSubmit(form: FormGroup) {
    this.submitProduct.emit(form.getRawValue());
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

  resetForm() {
    this.form.reset();
  }
}
