import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingcoursesComponent } from './followingcourses.component';

describe('FollowingcoursesComponent', () => {
  let component: FollowingcoursesComponent;
  let fixture: ComponentFixture<FollowingcoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollowingcoursesComponent]
    });
    fixture = TestBed.createComponent(FollowingcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
