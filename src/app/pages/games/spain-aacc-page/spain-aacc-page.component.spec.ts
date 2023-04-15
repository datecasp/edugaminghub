import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpainAaccPageComponent } from './spain-aacc-page.component';

describe('SpainAaccPageComponent', () => {
  let component: SpainAaccPageComponent;
  let fixture: ComponentFixture<SpainAaccPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpainAaccPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpainAaccPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
