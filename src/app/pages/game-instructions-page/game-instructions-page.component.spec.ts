import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInstructionsPageComponent } from './game-instructions-page.component';

describe('GameInstructionsPageComponent', () => {
  let component: GameInstructionsPageComponent;
  let fixture: ComponentFixture<GameInstructionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameInstructionsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameInstructionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
