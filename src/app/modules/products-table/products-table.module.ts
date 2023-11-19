import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsTableComponent } from './products-table.component';


const routes: Routes = [{ path: '', component: ProductsTableComponent }];

@NgModule({
  declarations: [ProductsTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsTableModule { }
