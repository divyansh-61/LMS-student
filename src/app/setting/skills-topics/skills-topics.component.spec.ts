import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTopicsComponent } from './skills-topics.component';

describe('SkillsTopicsComponent', () => {
  let component: SkillsTopicsComponent;
  let fixture: ComponentFixture<SkillsTopicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsTopicsComponent]
    });
    fixture = TestBed.createComponent(SkillsTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
