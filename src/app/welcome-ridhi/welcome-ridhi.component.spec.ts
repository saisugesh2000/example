import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeRIDHIComponent } from './welcome-ridhi.component';

describe('WelcomeRIDHIComponent', () => {
  let component: WelcomeRIDHIComponent;
  let fixture: ComponentFixture<WelcomeRIDHIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeRIDHIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomeRIDHIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
