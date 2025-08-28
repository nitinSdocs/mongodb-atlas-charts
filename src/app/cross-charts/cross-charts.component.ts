import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { JwtCreationService } from '../service/jwt-creation.service';

@Component({
  selector: 'app-cross-charts',
  standalone: false,
  templateUrl: './cross-charts.component.html',
  styleUrl: './cross-charts.component.css'
})
export class CrossChartsComponent implements AfterViewInit{

  private donutChart: any;
  private barChart: any;
  public totalCountChart: any;
  private genereDonutChart: any;

  constructor(private jwtService: JwtCreationService) {}
  
  async ngAfterViewInit() {
    if (!window || !(window as any).ChartsEmbedSDK) {
        console.error('ChartsEmbedSDK not loaded. Check index.html script tag.');
      return;
    }

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3NTYxOTk3MzcsImV4cCI6MTc1NjI0NjUzNywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.oo422kp8mVjX7jsMLLGWRNX5orArdFfeItYqSocUqPg"
    console.log("JWT Token", token)

    const sdk = new (window as any).ChartsEmbedSDK({ 
      baseUrl: 'https://charts.mongodb.com/charts-project-0-tdujlzw'
    });
    this.donutChart = sdk.createChart({ chartId: 'a6bdff0a-7c1e-4acb-ae1f-c9db1829f92f', height: 600 });

    this.barChart = sdk.createChart({
      chartId: "f2357031-c519-4920-bf39-89ba28b7d1e4",
      height: 700
    });

    this.totalCountChart = sdk.createChart({
      chartId: "db5f2d4b-3900-4d22-a78d-0544e320e671",
      height: 100
    });

    this.genereDonutChart = sdk.createChart({
      chartId: "ff7f3389-9e0a-4654-b939-69d24ef315d1",
      height: 700
    });


     this.totalCountChart.render(document.getElementById('countChart'));
     this.donutChart.render(document.getElementById('chart1'));
     this.barChart.render(document.getElementById('chart2'));
     this.genereDonutChart.render(document.getElementById('genereDonutChart'));

    const clickHandler = (payload: any) => {
      this.donutChart.setHighlight(payload.selectionFilter);
      this.barChart.setFilter(payload.selectionFilter);
      this.totalCountChart.setFilter(payload.selectionFilter);
      this.genereDonutChart.setFilter(payload.selectionFilter);
      const filterMessageElem = document.getElementById("filterMessage");
      if (filterMessageElem) {
        filterMessageElem.innerText = `${payload.data.y.value} movies from the ${payload.data.color.lowerBound}s`;
      }
    };

    const options = { includes: [{ roles: ["mark"] }] };
    this.donutChart.addEventListener("click", clickHandler, options);
  }

}
