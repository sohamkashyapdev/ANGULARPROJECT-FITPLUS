import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiCoachComponent } from './ai-coach.component';

describe('AiCoachComponent', () => {
  let component: AiCoachComponent;
  let fixture: ComponentFixture<AiCoachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiCoachComponent]
    });
    fixture = TestBed.createComponent(AiCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
