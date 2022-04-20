import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringOperatorsPageComponent } from './filtering-operators-page.component';

describe('FilteringOperatorsPageComponent', () => {
  let component: FilteringOperatorsPageComponent;
  let fixture: ComponentFixture<FilteringOperatorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteringOperatorsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteringOperatorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
