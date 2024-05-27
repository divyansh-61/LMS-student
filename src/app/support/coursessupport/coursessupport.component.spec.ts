import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursessupportComponent } from './coursessupport.component';

describe('CoursessupportComponent', () => {
  let component: CoursessupportComponent;
  let fixture: ComponentFixture<CoursessupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursessupportComponent]
    });
    fixture = TestBed.createComponent(CoursessupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
