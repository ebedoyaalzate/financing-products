import {SharedModule} from './../shared-modules/shared.module';
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditProductComponent} from './edit-product.component';

const routes: Routes = [{path: '', component: EditProductComponent}];

@NgModule({
  declarations: [EditProductComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class EditProductModule {}
