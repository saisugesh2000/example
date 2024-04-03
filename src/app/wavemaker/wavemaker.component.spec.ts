import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavemakerComponent } from './wavemaker.component';

describe('WavemakerComponent', () => {
  let component: WavemakerComponent;
  let fixture: ComponentFixture<WavemakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WavemakerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WavemakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
