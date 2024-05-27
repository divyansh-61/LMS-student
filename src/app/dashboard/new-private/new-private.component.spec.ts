import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPrivateComponent } from './new-private.component';

describe('NewPrivateComponent', () => {
  let component: NewPrivateComponent;
  let fixture: ComponentFixture<NewPrivateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPrivateComponent]
    });
    fixture = TestBed.createComponent(NewPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
