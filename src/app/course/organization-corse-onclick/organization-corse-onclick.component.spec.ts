import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationCorseOnclickComponent } from './organization-corse-onclick.component';

describe('OrganizationCorseOnclickComponent', () => {
  let component: OrganizationCorseOnclickComponent;
  let fixture: ComponentFixture<OrganizationCorseOnclickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationCorseOnclickComponent]
    });
    fixture = TestBed.createComponent(OrganizationCorseOnclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
