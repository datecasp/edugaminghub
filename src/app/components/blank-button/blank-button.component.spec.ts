import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankButtonComponent } from './blank-button.component';

describe('BlankButtonComponent', () => {
  let component: BlankButtonComponent;
  let fixture: ComponentFixture<BlankButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlankButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlankButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
