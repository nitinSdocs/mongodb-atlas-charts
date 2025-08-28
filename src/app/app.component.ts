import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-dashboard';
  activeDashboard: 'sdk' | 'iframe' | 'cross-charts' | 'invoice-chart' = 'sdk';
}
