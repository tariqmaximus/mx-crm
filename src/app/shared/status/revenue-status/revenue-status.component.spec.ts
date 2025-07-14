import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueStatusComponent } from './revenue-status.component';

describe('RevenueStatusComponent', () => {
  let component: RevenueStatusComponent;
  let fixture: ComponentFixture<RevenueStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenueStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
