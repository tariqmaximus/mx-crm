import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayLeadsComponent } from './today-leads.component';

describe('TodayLeadsComponent', () => {
  let component: TodayLeadsComponent;
  let fixture: ComponentFixture<TodayLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayLeadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
