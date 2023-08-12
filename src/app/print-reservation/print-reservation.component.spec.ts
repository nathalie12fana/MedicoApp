import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintReservationComponent } from './print-reservation.component';

describe('PrintReservationComponent', () => {
  let component: PrintReservationComponent;
  let fixture: ComponentFixture<PrintReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintReservationComponent]
    });
    fixture = TestBed.createComponent(PrintReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
