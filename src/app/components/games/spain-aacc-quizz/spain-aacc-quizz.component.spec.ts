import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpainAaccQuizzComponent } from './spain-aacc-quizz.component';

describe('SpainAaccQuizzComponent', () => {
  let component: SpainAaccQuizzComponent;
  let fixture: ComponentFixture<SpainAaccQuizzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpainAaccQuizzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpainAaccQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
