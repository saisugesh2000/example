import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullpageComponentComponent } from './fullpage-component.component';

describe('FullpageComponentComponent', () => {
  let component: FullpageComponentComponent;
  let fixture: ComponentFixture<FullpageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullpageComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullpageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
