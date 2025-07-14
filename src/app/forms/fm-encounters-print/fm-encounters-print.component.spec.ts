import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmEncountersPrintComponent } from './fm-encounters-print.component';

describe('FmEncountersPrintComponent', () => {
  let component: FmEncountersPrintComponent;
  let fixture: ComponentFixture<FmEncountersPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FmEncountersPrintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmEncountersPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
