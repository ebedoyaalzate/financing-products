import { SharedModule } from './../shared-modules/shared.module';
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateProductComponent} from './create-product.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{path: '', component: CreateProductComponent}];

@NgModule({
  declarations: [CreateProductComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class CreateProductModule {}
