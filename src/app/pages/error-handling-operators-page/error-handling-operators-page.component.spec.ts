import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlingOperatorsPageComponent } from './error-handling-operators-page.component';

describe('ErrorHandlingOperatorsPageComponent', () => {
  let component: ErrorHandlingOperatorsPageComponent;
  let fixture: ComponentFixture<ErrorHandlingOperatorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorHandlingOperatorsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorHandlingOperatorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
