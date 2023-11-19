import {Product} from './../../types/products';
import {TestBed} from '@angular/core/testing';

import {ProductsService} from './products.service';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { dummyProducts } from 'src/test/mocks/products';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getUsers Should make a request', () => {
    service.getProducts().subscribe(products => {
      expect(products.length).toBe(5);
      expect(products).toEqual(dummyProducts);
    });
    const request = httpMock.expectOne(`${service.API_URL}/bp/products`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyProducts);
  });
});
