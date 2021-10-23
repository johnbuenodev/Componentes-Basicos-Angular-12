import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarAdvancedComponent } from './progress-bar-advanced.component';

describe('ProgressBarAdvancedComponent', () => {
  let component: ProgressBarAdvancedComponent;
  let fixture: ComponentFixture<ProgressBarAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
