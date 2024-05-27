import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSettingPageComponent } from './main-setting-page.component';

describe('MainSettingPageComponent', () => {
  let component: MainSettingPageComponent;
  let fixture: ComponentFixture<MainSettingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainSettingPageComponent]
    });
    fixture = TestBed.createComponent(MainSettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
