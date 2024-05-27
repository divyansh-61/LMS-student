import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesSettingComponent } from './images-setting.component';

describe('ImagesSettingComponent', () => {
  let component: ImagesSettingComponent;
  let fixture: ComponentFixture<ImagesSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesSettingComponent]
    });
    fixture = TestBed.createComponent(ImagesSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
