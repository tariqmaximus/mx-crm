import { ComponentFixture, TestBed } from '@angular/core/testing';

import { allLeadsComponent } from './all-leads.component';

describe('allLeadsComponent', () => {
  let component: allLeadsComponent;
  let fixture: ComponentFixture<allLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [allLeadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(allLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
