import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaichartComponent } from './paichart.component';

describe('PaichartComponent', () => {
  let component: PaichartComponent;
  let fixture: ComponentFixture<PaichartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaichartComponent]
    });
    fixture = TestBed.createComponent(PaichartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
