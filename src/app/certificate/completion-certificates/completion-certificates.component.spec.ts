import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionCertificatesComponent } from './completion-certificates.component';

describe('CompletionCertificatesComponent', () => {
  let component: CompletionCertificatesComponent;
  let fixture: ComponentFixture<CompletionCertificatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletionCertificatesComponent]
    });
    fixture = TestBed.createComponent(CompletionCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
