import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableSectionComponent } from './scrollable-section.component';

describe('ScrollableSectionComponent', () => {
  let component: ScrollableSectionComponent;
  let fixture: ComponentFixture<ScrollableSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollableSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollableSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
