import {Product} from './../../types/products';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterProducts',
  pure: false,
})
export class FilterProductsPipe implements PipeTransform {
  transform(
    items: Product[],
    searchValue: string,
    pagination: number,
  ): Product[] {
    if (!items) {
      return [];
    }
    if (!searchValue) {
      return items.slice(0, pagination);;
    }
    return items
      .filter(item =>
        item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
      )
      .slice(0, pagination);
  }
}
