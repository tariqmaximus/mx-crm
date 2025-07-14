import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmFilePreviewComponent } from './fm-file-preview.component';

describe('FmFilePreviewComponent', () => {
  let component: FmFilePreviewComponent;
  let fixture: ComponentFixture<FmFilePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FmFilePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmFilePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
