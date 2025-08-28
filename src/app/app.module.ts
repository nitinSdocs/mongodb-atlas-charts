import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { IframeDashboardComponent } from './iframe-dashboard.component';
import { FormsModule } from '@angular/forms';
import { CrossChartsComponent } from './cross-charts/cross-charts.component';
import { InvoiceChartComponent } from './invoice-chart/invoice-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    IframeDashboardComponent,
    CrossChartsComponent,
    InvoiceChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
