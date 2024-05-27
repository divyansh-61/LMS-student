import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPurchaceCourseComponent } from './my-purchace-course.component';

describe('MyPurchaceCourseComponent', () => {
  let component: MyPurchaceCourseComponent;
  let fixture: ComponentFixture<MyPurchaceCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPurchaceCourseComponent]
    });
    fixture = TestBed.createComponent(MyPurchaceCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
