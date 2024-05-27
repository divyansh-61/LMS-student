import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationBonusComponent } from './registration-bonus.component';

describe('RegistrationBonusComponent', () => {
  let component: RegistrationBonusComponent;
  let fixture: ComponentFixture<RegistrationBonusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationBonusComponent]
    });
    fixture = TestBed.createComponent(RegistrationBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
