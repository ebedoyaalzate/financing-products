import {ModalComponent} from './../../components/modal/modal.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProductsTableComponent} from './products-table.component';
import {FilterProductsPipe} from 'src/app/pipes/filter/filter-products.pipe';

const routes: Routes = [{path: '', component: ProductsTableComponent}];

@NgModule({
  declarations: [ProductsTableComponent, FilterProductsPipe, ModalComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class ProductsTableModule {}
