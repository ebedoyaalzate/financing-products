import { CreateProductModule } from './modules/create-product/create-product.module';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/products-table/products-table.module').then(
        m => m.ProductsTableModule,
      ),
  },
  {
    path: 'add-product',
    loadChildren: () =>
      import('./modules/create-product/create-product.module').then(
        m => m.CreateProductModule,
      ),
  },
  {
    path: 'edit-product',
    loadChildren: () =>
      import('./modules/edit-product/edit-product.module').then(
        m => m.EditProductModule,
      ),
  },
  { path: '**',  redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
