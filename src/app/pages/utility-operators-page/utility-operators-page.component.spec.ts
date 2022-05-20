import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityOperatorsPageComponent } from './utility-operators-page.component';

describe('UtilityOperatorsPageComponent', () => {
  let component: UtilityOperatorsPageComponent;
  let fixture: ComponentFixture<UtilityOperatorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityOperatorsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityOperatorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
