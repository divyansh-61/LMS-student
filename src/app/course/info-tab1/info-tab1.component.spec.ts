import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTab1Component } from './info-tab1.component';

describe('InfoTab1Component', () => {
  let component: InfoTab1Component;
  let fixture: ComponentFixture<InfoTab1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoTab1Component]
    });
    fixture = TestBed.createComponent(InfoTab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
