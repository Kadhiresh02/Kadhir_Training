import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngformComponent } from './angform.component';

describe('AngformComponent', () => {
  let component: AngformComponent;
  let fixture: ComponentFixture<AngformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
