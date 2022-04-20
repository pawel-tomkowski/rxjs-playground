import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationOperatorsPageComponent } from './creation-operators-page.component';

describe('CreationOperatorsPageComponent', () => {
  let component: CreationOperatorsPageComponent;
  let fixture: ComponentFixture<CreationOperatorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationOperatorsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationOperatorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
