import { ProductFormComponent } from './../../components/product-form/product-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ProductFormComponent]
})
export class SharedModule { }
