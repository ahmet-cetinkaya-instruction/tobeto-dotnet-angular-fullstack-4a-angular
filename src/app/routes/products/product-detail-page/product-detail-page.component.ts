import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsComponent } from '../../../features/products/components/product-details/product-details.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [
    // CommonModule, // SharedModule içerisinde olduğu için burada tekrar import etmeye gerek yok.
    // BasicLayoutComponent,
    ProductDetailsComponent,
    SharedModule
  ],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailPageComponent implements OnInit {
  productId!: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProductIdFromRoute();
  }

  getProductIdFromRoute() {
    this.route.params
      .subscribe((params) => {
        const productId = Number(params['productId']);
        if (productId) this.productId = productId;
        else {
          this.router.navigate(['/']);
          throw new Error('Product ID is invalid: ' + productId);
        }
      })
      .unsubscribe();
  }
}
