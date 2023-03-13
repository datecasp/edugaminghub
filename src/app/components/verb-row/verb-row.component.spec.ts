import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbRowComponent } from './verb-row.component';

describe('VerbRowComponent', () => {
  let component: VerbRowComponent;
  let fixture: ComponentFixture<VerbRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerbRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
