import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-basic-examples',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './basic-examples.component.html',
  styleUrl: './basic-examples.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicExamplesComponent {
    // Değişkenler ve fonksiyonlar burada tanımlanır.
    title: string = 'Northwind Market'; // State: Angular state değerlerini tutar ve değer değişiklikleri canlı olarak takip eder.

    cartCount: number = 0; // Sepetteki ürün sayısını tutar.

    products: { name: string; price: number; discontinued: boolean }[] = [
      // Ürün listesi
      {
        name: "Çay",
        price: 100,
        discontinued: false
      },
      {
        name: "Kahve",
        price: 200,
        discontinued: true
      },
      {
        name: "Su",
        price: 10,
        discontinued: false
      },
      {
        name: "Meyve Suyu",
        price: 20,
        discontinued: false
      },
      {
        name: "Maden suyu",
        price: 7.5,
        discontinued: true
      }
    ];

    onAddProductToCart(): void {
      // Sepete ürün ekleme işlemi
      this.cartCount += 1;

      console.log('Ürün sepete eklendi.');
    }
}
