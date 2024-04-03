import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCicloComponent } from './test-ciclo.component';

describe('TestCicloComponent', () => {
  let component: TestCicloComponent;
  let fixture: ComponentFixture<TestCicloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCicloComponent]
    });
    fixture = TestBed.createComponent(TestCicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
