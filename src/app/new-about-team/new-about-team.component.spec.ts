import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAboutTeamComponent } from './new-about-team.component';

describe('NewAboutTeamComponent', () => {
  let component: NewAboutTeamComponent;
  let fixture: ComponentFixture<NewAboutTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewAboutTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewAboutTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
