import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclelistComponent } from './vehiclelist.component';

describe('VehiclelistComponent', () => {
  let component: VehiclelistComponent;
  let fixture: ComponentFixture<VehiclelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiclelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
