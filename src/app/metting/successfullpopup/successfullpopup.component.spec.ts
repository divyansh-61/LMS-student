import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullpopupComponent } from './successfullpopup.component';

describe('SuccessfullpopupComponent', () => {
  let component: SuccessfullpopupComponent;
  let fixture: ComponentFixture<SuccessfullpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessfullpopupComponent]
    });
    fixture = TestBed.createComponent(SuccessfullpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
