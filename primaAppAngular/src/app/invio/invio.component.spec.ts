import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvioComponent } from './invio.component';

describe('InvioComponent', () => {
  let component: InvioComponent;
  let fixture: ComponentFixture<InvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
