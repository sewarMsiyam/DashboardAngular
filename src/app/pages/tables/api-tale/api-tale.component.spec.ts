import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTaleComponent } from './api-tale.component';

describe('ApiTaleComponent', () => {
  let component: ApiTaleComponent;
  let fixture: ComponentFixture<ApiTaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiTaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiTaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
