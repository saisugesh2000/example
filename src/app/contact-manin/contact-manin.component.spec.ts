import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManinComponent } from './contact-manin.component';

describe('ContactManinComponent', () => {
  let component: ContactManinComponent;
  let fixture: ComponentFixture<ContactManinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactManinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactManinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
