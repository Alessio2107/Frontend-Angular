import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondoCComponent } from './secondo-c.component';

describe('SecondoCComponent', () => {
  let component: SecondoCComponent;
  let fixture: ComponentFixture<SecondoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondoCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
