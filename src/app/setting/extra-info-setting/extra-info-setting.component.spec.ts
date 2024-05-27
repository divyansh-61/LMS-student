import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraInfoSettingComponent } from './extra-info-setting.component';

describe('ExtraInfoSettingComponent', () => {
  let component: ExtraInfoSettingComponent;
  let fixture: ComponentFixture<ExtraInfoSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraInfoSettingComponent]
    });
    fixture = TestBed.createComponent(ExtraInfoSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
