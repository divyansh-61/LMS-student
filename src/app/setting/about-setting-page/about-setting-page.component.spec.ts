import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSettingPageComponent } from './about-setting-page.component';

describe('AboutSettingPageComponent', () => {
  let component: AboutSettingPageComponent;
  let fixture: ComponentFixture<AboutSettingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutSettingPageComponent]
    });
    fixture = TestBed.createComponent(AboutSettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
