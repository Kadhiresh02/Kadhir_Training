import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiImageToggleComponent } from './multi-image-toggle.component';

describe('MultiImageToggleComponent', () => {
  let component: MultiImageToggleComponent;
  let fixture: ComponentFixture<MultiImageToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiImageToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiImageToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
