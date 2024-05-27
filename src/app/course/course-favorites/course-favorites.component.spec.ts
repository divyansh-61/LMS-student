import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFavoritesComponent } from './course-favorites.component';

describe('CourseFavoritesComponent', () => {
  let component: CourseFavoritesComponent;
  let fixture: ComponentFixture<CourseFavoritesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseFavoritesComponent]
    });
    fixture = TestBed.createComponent(CourseFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
