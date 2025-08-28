import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossChartsComponent } from './cross-charts.component';

describe('CrossChartsComponent', () => {
  let component: CrossChartsComponent;
  let fixture: ComponentFixture<CrossChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrossChartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrossChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
