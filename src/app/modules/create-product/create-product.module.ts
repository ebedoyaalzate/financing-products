import { ProductFormComponent } from './../../components/product-form/product-form.component';
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateProductComponent} from './create-product.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{path: '', component: CreateProductComponent}];

@NgModule({
  declarations: [CreateProductComponent, ProductFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class CreateProductModule {}
