import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollbleContactComponent } from './scrollble-contact.component';

describe('ScrollbleContactComponent', () => {
  let component: ScrollbleContactComponent;
  let fixture: ComponentFixture<ScrollbleContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollbleContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollbleContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
