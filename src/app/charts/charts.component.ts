import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-charts',
  standalone: false,
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})

export class ChartsComponent implements AfterViewInit {
  @ViewChild('chart1', { static: true }) chart1!: ElementRef;
  @ViewChild('chart2', { static: true }) chart2!: ElementRef;
  @ViewChild('chart3', { static: true }) chart3!: ElementRef;

  private chartInstance1: any;
  private chartInstance2: any;
  private chartInstance3: any;
  currentTheme: string = 'light';

  languages: string[] = ['English', 'Hindi', 'Spanish', 'French']; // Example, replace with your actual list
  selectedLanguage: string = '';

  years: number[] = [2020, 2021, 2022, 2023, 2024, 2025]; // Example, replace with your actual list
  selectedYear: string = '';

  async ngAfterViewInit() {
    if (!window || !(window as any).ChartsEmbedSDK) {
      console.error('ChartsEmbedSDK not loaded. Check index.html script tag.');
      return;
    }

    const sdk = new (window as any).ChartsEmbedSDK({ baseUrl: 'https://charts.mongodb.com/charts-project-0-tdujlzw' });
    this.chartInstance1 = sdk.createChart({ chartId: 'a6bdff0a-7c1e-4acb-ae1f-c9db1829f92f', height: '600px' });

    this.chartInstance2 = sdk.createChart({
      chartId: "f2357031-c519-4920-bf39-89ba28b7d1e4",
      height: "480px",
      width: '100%',
      theme: "light",
      autoRefresh: true
    });

    this.chartInstance3 = sdk.createChart({
      chartId: "db5f2d4b-3900-4d22-a78d-0544e320e671",
      autoRefresh: true
    });
    
     this.chartInstance1.render(this.chart1.nativeElement);
     this.chartInstance2.render(this.chart2.nativeElement);
     this.chartInstance3.render(this.chart3.nativeElement);
  }

  async toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';

    // Apply new theme to both charts
    await this.chartInstance1.setTheme(this.currentTheme);
    await this.chartInstance2.setTheme(this.currentTheme);
    await this.chartInstance3.setTheme(this.currentTheme);
  }

  onLanguageChange(arg0: any) {
    throw new Error('Method not implemented.');
  }

  async applyChart1Filter() {
    const filter = this.selectedLanguage ? { languages: this.selectedLanguage } : {};
    console.log(filter);
    await this.chartInstance1.setFilter(filter);
}

  async applyChart2Filter() {
    const filter = this.selectedYear ? { year: Number(this.selectedYear) } : {};
    console.log(filter);
    await this.chartInstance2.setFilter(filter);
}
}
