import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePopupBasicInfoComponent } from './delete-popup-basic-info.component';

describe('DeletePopupBasicInfoComponent', () => {
  let component: DeletePopupBasicInfoComponent;
  let fixture: ComponentFixture<DeletePopupBasicInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePopupBasicInfoComponent]
    });
    fixture = TestBed.createComponent(DeletePopupBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
