import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationOperatorsPageComponent } from './combination-operators-page.component';

describe('CombinationOperatorsPageComponent', () => {
  let component: CombinationOperatorsPageComponent;
  let fixture: ComponentFixture<CombinationOperatorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinationOperatorsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinationOperatorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
