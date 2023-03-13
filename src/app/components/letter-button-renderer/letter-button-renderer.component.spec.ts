import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterButtonRendererComponent } from './letter-button-renderer.component';

describe('LetterButtonRendererComponent', () => {
  let component: LetterButtonRendererComponent;
  let fixture: ComponentFixture<LetterButtonRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterButtonRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterButtonRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
