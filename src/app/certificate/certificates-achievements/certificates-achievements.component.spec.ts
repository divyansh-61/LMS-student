import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesAchievementsComponent } from './certificates-achievements.component';

describe('CertificatesAchievementsComponent', () => {
  let component: CertificatesAchievementsComponent;
  let fixture: ComponentFixture<CertificatesAchievementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificatesAchievementsComponent]
    });
    fixture = TestBed.createComponent(CertificatesAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
