import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillTheGapsPageComponent } from './fill-the-gaps-page.component';

describe('FillTheGapsPageComponent', () => {
  let component: FillTheGapsPageComponent;
  let fixture: ComponentFixture<FillTheGapsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillTheGapsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillTheGapsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
