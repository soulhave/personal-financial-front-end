import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeReadComponent } from './income-read.component';

describe('IncomeReadComponent', () => {
  let component: IncomeReadComponent;
  let fixture: ComponentFixture<IncomeReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
