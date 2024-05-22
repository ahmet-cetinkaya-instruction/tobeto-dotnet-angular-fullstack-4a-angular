import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminPanelPageComponent } from './admin-panel-page/admin-panel-page.component';
import { MyAccountPageComponent } from './my-account-page/my-account-page.component';
import { securedRouteGuard } from '../../core/auth/guards/secured-route.guard';
import { AuthRoles } from '../../core/auth/constants/auth-roles';

export const authRoutes: Routes = [
  {
    path: 'auth/login', // localhost:4200/auth/login
    component: LoginPageComponent,
  },
  {
    path: 'my-account',
    canActivate: [securedRouteGuard],
    component: MyAccountPageComponent,
  },
  {
    path: 'admin-panel',
    data: {
      requiredRoles: [AuthRoles.Admin],
    },
    canActivate: [securedRouteGuard],
    component: AdminPanelPageComponent,
  },
];
