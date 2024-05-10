import { Routes } from '@angular/router';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { authRoutes } from './routes/auth/auth.routes';

export const routes: Routes = [
  {
    path: '', // Route belirtilen path ile eşleştiğinde
    component: HomePageComponent, // İlgili componenti AppComponent'ten başlayarak
    // ilk karşılaştığı <router-outlet></router-outlet> etiketine yerleştirir.
  },

  ...authRoutes, // authRoutes içindeki tüm route'ları routes'a ekler.
  // ... spread operator ile bir array içindeki tüm elemanlarını tek tek ilgili yere yerleştirir..
];
