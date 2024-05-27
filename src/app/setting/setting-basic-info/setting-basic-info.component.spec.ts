import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingBasicInfoComponent } from './setting-basic-info.component';

describe('SettingBasicInfoComponent', () => {
  let component: SettingBasicInfoComponent;
  let fixture: ComponentFixture<SettingBasicInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingBasicInfoComponent]
    });
    fixture = TestBed.createComponent(SettingBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
