import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableAboutComponent } from './scrollable-about.component';

describe('ScrollableAboutComponent', () => {
  let component: ScrollableAboutComponent;
  let fixture: ComponentFixture<ScrollableAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollableAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollableAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
