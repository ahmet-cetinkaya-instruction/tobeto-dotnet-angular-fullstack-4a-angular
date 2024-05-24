import { Routes } from '@angular/router';
import { authRoutes } from './routes/auth/auth.routes';
import { productsRoutes } from './routes/products/products.routes';
import { categoriesRoutes } from './routes/categories/categories.routes';
import { BasicLayoutComponent } from './shared/components/basic-layout/basic-layout.component';
import { HomePageComponent } from './routes/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '', // Route belirtilen path ile eşleştiğinde
    component: BasicLayoutComponent, // İlgili componenti AppComponent'ten başlayarak
    // ilk karşılaştığı <router-outlet></router-outlet> etiketine yerleştirir.
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      // Child Route'lar, parent route'daki component'den -BasicLayoutComponent- başlayarak ilk karşılaştığı <router-outlet></router-outlet> etiketine yerleştirilir.

      ...authRoutes, // authRoutes içindeki tüm route'ları routes'a ekler.
      // ... spread operator ile bir array içindeki tüm elemanlarını tek tek ilgili yere yerleştirir..
      ...productsRoutes,
      ...categoriesRoutes,
    ],
  },
];
