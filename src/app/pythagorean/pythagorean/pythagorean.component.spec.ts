import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { PythagoreanComponent } from './pythagorean.component';

describe('PythagoreanComponent', () => {
  let component: PythagoreanComponent;
  let fixture: ComponentFixture<PythagoreanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PythagoreanComponent],
      providers: [provideHttpClient()],
    }).compileComponents();
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
