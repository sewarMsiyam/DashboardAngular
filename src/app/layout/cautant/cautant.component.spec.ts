import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CautantComponent } from './cautant.component';

describe('CautantComponent', () => {
  let component: CautantComponent;
  let fixture: ComponentFixture<CautantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CautantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CautantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
