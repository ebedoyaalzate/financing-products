import { FilterProductsPipe } from 'src/app/pipes/filter/filter-products.pipe';
import {FormsModule} from '@angular/forms';
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
      declarations: [ProductsTableComponent, FilterProductsPipe],
      providers: [
        {
          provide: ProductsService,
          useValue: {getProducts: () => of(dummyProducts)},
        },
      ],
      imports: [HttpClientTestingModule, FormsModule],
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

  it('Should show correct results in page', () => {
    let spanResult = fixture.nativeElement.querySelector('#results');
    expect(spanResult.innerHTML).toBe(`${dummyProducts.length} Resultados`);
  });

  it('Should paginate correctly', () => {
    const select: HTMLSelectElement =
      fixture.nativeElement.querySelector('#pagination-select');
    select.value = select.options[2].value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(8);
  });
});
