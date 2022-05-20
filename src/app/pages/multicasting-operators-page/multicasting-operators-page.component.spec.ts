import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticastingOperatorsPageComponent } from './multicasting-operators-page.component';

describe('MulticastingOperatorsPageComponent', () => {
  let component: MulticastingOperatorsPageComponent;
  let fixture: ComponentFixture<MulticastingOperatorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulticastingOperatorsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticastingOperatorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
