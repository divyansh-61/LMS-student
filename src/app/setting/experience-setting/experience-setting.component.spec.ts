import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceSettingComponent } from './experience-setting.component';

describe('ExperienceSettingComponent', () => {
  let component: ExperienceSettingComponent;
  let fixture: ComponentFixture<ExperienceSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceSettingComponent]
    });
    fixture = TestBed.createComponent(ExperienceSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
