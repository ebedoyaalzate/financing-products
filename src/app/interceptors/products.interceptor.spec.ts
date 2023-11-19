import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {TestBed, inject} from '@angular/core/testing';

import {ProductsInterceptor} from './products.interceptor';

describe('ProductsInterceptor', () => {
  let interceptor: ProductsInterceptor;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ProductsInterceptor,
          multi: true,
        },
        ProductsInterceptor,
      ],
    });
    interceptor = TestBed.inject(ProductsInterceptor);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add a custom header to the request', inject(
    [HttpClient, HttpTestingController],
    (http: HttpClient, mock: HttpTestingController) => {
      http.get('/api/data').subscribe(response => {
        expect(response).toBeTruthy();
      });

      const httpRequest = mock.expectOne(req => req.headers.has('authorId'));

      expect(httpRequest.request.headers.get('authorId')).toEqual('1');

      httpRequest.flush({data: 'test'});

      mock.verify();
    },
  ));
});
