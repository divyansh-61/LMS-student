import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateofflinestatusComponent } from './activateofflinestatus.component';

describe('ActivateofflinestatusComponent', () => {
  let component: ActivateofflinestatusComponent;
  let fixture: ComponentFixture<ActivateofflinestatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivateofflinestatusComponent]
    });
    fixture = TestBed.createComponent(ActivateofflinestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
