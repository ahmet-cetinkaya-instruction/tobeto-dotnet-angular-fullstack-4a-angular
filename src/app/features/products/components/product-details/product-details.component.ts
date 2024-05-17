import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductDetail } from '../../models/product-detail';
import { PlaceholderComponent } from '../../../../shared/components/placeholder/placeholder.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { HighlightDirective } from '../../../../shared/directives/highlight.directive';
import { VatPipe } from '../../pipes/vat.pipe';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, PlaceholderComponent, ButtonComponent, VatPipe, HighlightDirective],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {
  @Input() id!: number; // OnPush ile değişikliklerin algılanması için Input değeri değişmesi gerekir. (1. Olay)
  product!: ProductDetail;

  constructor(
    private productsService: ProductsService,
    private change: ChangeDetectorRef
  ) {}

  // Lifecycle metotlarında değişikliklerin algılanması için değişikliklerin kontrol edilmesi gerekir. (4. Olay)
  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.productsService.getById(this.id).subscribe((product) => {
      this.product = product;

      this.change.markForCheck(); // OnPush ile değişikliklerin algılanması için değişikliklerin kontrol edilmesi gerekir. (2. Olay)
    });
  }

  // Kullanıcı herhangi bir olay oluşturduğunda OnPush ile değişikliklerin algılanması için değişikliklerin kontrol edilmesi gerekir. (3. Olay)
  onAddToCard() {}
}
