import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Component: Angular tarafında bir görünüm ve işlev için küçük parçalardır.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'northwind';
}
