import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpainRiversQuizzComponent } from './spain-rivers-quizz.component';

describe('SpainRiversQuizzComponent', () => {
  let component: SpainRiversQuizzComponent;
  let fixture: ComponentFixture<SpainRiversQuizzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpainRiversQuizzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpainRiversQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
