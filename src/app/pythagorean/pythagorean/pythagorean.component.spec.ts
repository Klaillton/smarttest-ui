import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythagoreanComponent } from './pythagorean.component';

describe('PythagoreanComponent', () => {
  let component: PythagoreanComponent;
  let fixture: ComponentFixture<PythagoreanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythagoreanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PythagoreanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
