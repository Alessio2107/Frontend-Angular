import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteInputComponent } from './componente-input.component';

describe('ComponenteInputComponent', () => {
  let component: ComponenteInputComponent;
  let fixture: ComponentFixture<ComponenteInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
