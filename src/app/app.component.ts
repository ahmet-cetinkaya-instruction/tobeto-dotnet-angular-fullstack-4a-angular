import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from './features/auth/services/auth.service';

// Component: Angular tarafında bir görünüm ve işlev için küçük parçalardır.
@Component({
  selector: 'app-root', // template içinde kullanılacak etiket adı

  standalone: true, // Angular 17 sonrası için varsayılan hale geldi. Standalone componentler herhangi bir Module yapısına bağlı kalmadan var olabilirler.
  imports: [RouterModule], // Import edilecek modülleri ve angular yapılarını belirtir.

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.test().subscribe({
      next: (secretMessage) => {
        console.log(secretMessage);
      },
      error: (error) => {
        console.error(error);
      },
    });

    this.authService.testAdmin().subscribe({
      next: (secretMessage) => {
        console.log(secretMessage);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}

// Angular 17 öncesinde varsayılan olarak componentler Module yapısında tanımlanıyorlardı.
// Angular Module Örneği
// @NgModule({
//   declarations: [AppComponent], // Component, Directive ve Pipe'ları tanımlar.
//   imports: [], // Dışarıdan alınan modülleri ekler.
//   providers: [], // Servisleri ekler.
//   bootstrap: [AppComponent], // Uygulamanın başlangıç componentini belirler.
// })
// export class AppModule {}
