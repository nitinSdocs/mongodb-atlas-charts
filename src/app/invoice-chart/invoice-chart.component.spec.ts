import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceChartComponent } from './invoice-chart.component';

describe('InvoiceChartComponent', () => {
  let component: InvoiceChartComponent;
  let fixture: ComponentFixture<InvoiceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoiceChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
