import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsGridComponent } from './metrics-grid.component';

describe('MetricsGridComponent', () => {
  let component: MetricsGridComponent;
  let fixture: ComponentFixture<MetricsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricsGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
