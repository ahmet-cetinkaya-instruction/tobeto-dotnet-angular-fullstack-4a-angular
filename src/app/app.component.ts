import { Component } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

// Component: Angular tarafında bir görünüm ve işlev için küçük parçalardır.
@Component({
  selector: 'app-root', // template içinde kullanılacak etiket adı

  standalone: true, // Angular 17 sonrası için varsayılan hale geldi. Standalone componentler herhangi bir Module yapısına bağlı kalmadan var olabilirler.
  imports: [NavbarComponent, FooterComponent], // Import edilecek modülleri ve angular yapılarını belirtir.

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent { // Değişkenler ve fonksiyonlar burada tanımlanır.
  title: string = 'Northwind Market'; // State: Angular state değerlerini tutar ve değer değişiklikleri canlı olarak takip eder.

  cartCount: number = 0; // Sepetteki ürün sayısını tutar.

  onAddProductToCart(): void { // Sepete ürün ekleme işlemi
    this.cartCount += 1;

    console.log('Ürün sepete eklendi.');
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
