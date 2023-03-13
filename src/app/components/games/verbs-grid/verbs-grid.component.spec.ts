import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsGridComponent } from './verbs-grid.component';

describe('VerbsGridComponent', () => {
  let component: VerbsGridComponent;
  let fixture: ComponentFixture<VerbsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbsGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerbsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
