import { dummyProducts } from 'src/test/mocks/products';
import { FilterProductsPipe } from './filter-products.pipe';

describe('FilterPipe', () => {
  const pipe = new FilterProductsPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform products with pagination', () => {
    const visibleProducts = pipe.transform(dummyProducts, '', 5)
    expect(visibleProducts.length).toBe(5);
  });
  
  it('transform products with searchValue', () => {
    const visibleProducts = pipe.transform(dummyProducts, 'sadas', 10)
    expect(visibleProducts.length).toBe(1);
  });

  it('transform products with searchValue and pagination', () => {
    const visibleProducts = pipe.transform(dummyProducts, 'as', 5)
    expect(visibleProducts.length).toBe(5);
  });
});
