import { Routes } from '@angular/router';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';

// export const productDetailRoute = {
//   path(productId: string): string {
//     return `products/detail/${productId}`;
//   },
//   routeParams: {
//     productId: 'productId',
//   },
// };

export const productsRoutes: Routes = [
  {
    path: 'products/detail/:productId',
    component: ProductDetailPageComponent,
  },
];
