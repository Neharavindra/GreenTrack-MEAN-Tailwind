import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonTrackerComponent } from './carbon-tracker.component';

describe('CarbonTrackerComponent', () => {
  let component: CarbonTrackerComponent;
  let fixture: ComponentFixture<CarbonTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarbonTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarbonTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
