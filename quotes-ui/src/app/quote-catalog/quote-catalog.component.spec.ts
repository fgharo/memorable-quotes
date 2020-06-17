import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteCatalogComponent } from './quote-catalog.component';

describe('QuoteCatalogComponent', () => {
  let component: QuoteCatalogComponent;
  let fixture: ComponentFixture<QuoteCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
