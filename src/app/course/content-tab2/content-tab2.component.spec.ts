import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTab2Component } from './content-tab2.component';

describe('ContentTab2Component', () => {
  let component: ContentTab2Component;
  let fixture: ComponentFixture<ContentTab2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentTab2Component]
    });
    fixture = TestBed.createComponent(ContentTab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
