import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyresComponent } from './myres.component';

describe('MyresComponent', () => {
  let component: MyresComponent;
  let fixture: ComponentFixture<MyresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyresComponent]
    });
    fixture = TestBed.createComponent(MyresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
