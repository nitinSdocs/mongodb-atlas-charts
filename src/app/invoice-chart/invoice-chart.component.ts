import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-invoice-chart',
  standalone: false,
  templateUrl: './invoice-chart.component.html',
  styleUrl: './invoice-chart.component.css'
})
export class InvoiceChartComponent implements AfterViewInit {
  public invoiceReportChart:any
  async ngAfterViewInit() {
    if (!window || !(window as any).ChartsEmbedSDK) {
        console.error('ChartsEmbedSDK not loaded. Check index.html script tag.');
      return;
    }

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3NTYxOTk3MzcsImV4cCI6MTc1NjI0NjUzNywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.oo422kp8mVjX7jsMLLGWRNX5orArdFfeItYqSocUqPg"
    console.log("JWT Token", token)

    const sdk = new (window as any).ChartsEmbedSDK({ 
      baseUrl: 'https://charts.mongodb.com/charts-project-0-tdujlzw',
    });
    this.invoiceReportChart = sdk.createChart( {
      chartId: "761b8c33-4a99-43bc-9004-0e7b4adff64d", 
      // chartId: "62630cc8-d6b6-45bd-8291-f307405f00f7",
        width: 1500, 
        height: 1000, 
        theme: "dark" 
    } )
    
    this.invoiceReportChart.render(document.getElementById('invoiceReportChart'))
  }
}
