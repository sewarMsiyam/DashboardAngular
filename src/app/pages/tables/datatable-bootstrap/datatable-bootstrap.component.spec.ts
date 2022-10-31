import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableBootstrapComponent } from './datatable-bootstrap.component';

describe('DatatableBootstrapComponent', () => {
  let component: DatatableBootstrapComponent;
  let fixture: ComponentFixture<DatatableBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatableBootstrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatableBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
