import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationOperatorsPageComponent } from './transformation-operators-page.component';

describe('TransformationOperatorsPageComponent', () => {
  let component: TransformationOperatorsPageComponent;
  let fixture: ComponentFixture<TransformationOperatorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransformationOperatorsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformationOperatorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
