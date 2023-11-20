import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Product} from './../../types/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  API_URL =
    'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const url = `${this.API_URL}/bp/products`;
    return this.http.get<Product[]>(url);
  }
}
