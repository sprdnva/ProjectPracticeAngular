import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueOutComponent } from './catalogue-out.component';

describe('CatalogueOutComponent', () => {
  let component: CatalogueOutComponent;
  let fixture: ComponentFixture<CatalogueOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
