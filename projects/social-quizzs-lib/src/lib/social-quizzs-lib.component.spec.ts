import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialQuizzsLibComponent } from './components/social-quizzs-lib.component';

describe('SocialQuizzsLibComponent', () => {
  let component: SocialQuizzsLibComponent;
  let fixture: ComponentFixture<SocialQuizzsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialQuizzsLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialQuizzsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
