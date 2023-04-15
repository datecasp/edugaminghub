import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpainRiversPageComponent } from './spain-rivers-page.component';

describe('SpainRiversPageComponent', () => {
  let component: SpainRiversPageComponent;
  let fixture: ComponentFixture<SpainRiversPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpainRiversPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpainRiversPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
