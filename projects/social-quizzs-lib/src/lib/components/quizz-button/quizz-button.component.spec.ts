import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzButtonComponent } from './quizz-button.component';

describe('QuizzButtonComponent', () => {
  let component: QuizzButtonComponent;
  let fixture: ComponentFixture<QuizzButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
