import {dummyProducts} from 'src/test/mocks/products';
import {ProductsService} from './../../services/products/products.service';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductsTableComponent} from './products-table.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';

describe('ProductsTableComponent', () => {
  let component: ProductsTableComponent;
  let fixture: ComponentFixture<ProductsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsTableComponent],
      providers: [
        {
          provide: ProductsService,
          useValue: {getProducts: () => of(dummyProducts)},
        },
      ],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should render products in the table', () => {
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(6);
  });

  it('Should add correct products in the component', () => {
    expect(component.products).toBe(dummyProducts);
  });

  it('Should show correct rersults in page', () => {
    let spanResult = fixture.nativeElement.querySelector('#results');
    expect(spanResult.innerHTML).toBe(`${dummyProducts.length} Resultados`)
  });
});
