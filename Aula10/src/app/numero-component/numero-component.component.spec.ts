import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroComponentComponent } from './numero-component.component';

describe('NumeroComponentComponent', () => {
  let component: NumeroComponentComponent;
  let fixture: ComponentFixture<NumeroComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumeroComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumeroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
