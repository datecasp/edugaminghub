import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsGridTestPageComponent } from './verbs-grid-test-page.component';

describe('VerbsGridTestPageComponent', () => {
  let component: VerbsGridTestPageComponent;
  let fixture: ComponentFixture<VerbsGridTestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbsGridTestPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerbsGridTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
