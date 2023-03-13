import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomLetterButtonComponent } from './random-letter-button.component';

describe('RandomLetterButtonComponent', () => {
  let component: RandomLetterButtonComponent;
  let fixture: ComponentFixture<RandomLetterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomLetterButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomLetterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
