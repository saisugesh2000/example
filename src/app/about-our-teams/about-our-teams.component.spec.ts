import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOurTeamsComponent } from './about-our-teams.component';

describe('AboutOurTeamsComponent', () => {
  let component: AboutOurTeamsComponent;
  let fixture: ComponentFixture<AboutOurTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutOurTeamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutOurTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
