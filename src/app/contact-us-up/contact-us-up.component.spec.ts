import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsUPComponent } from './contact-us-up.component';

describe('ContactUsUPComponent', () => {
  let component: ContactUsUPComponent;
  let fixture: ComponentFixture<ContactUsUPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactUsUPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactUsUPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
