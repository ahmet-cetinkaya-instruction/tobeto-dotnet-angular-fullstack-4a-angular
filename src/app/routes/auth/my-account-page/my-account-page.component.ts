import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { AuthService } from '../../../features/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account-page',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './my-account-page.component.html',
  styleUrl: './my-account-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyAccountPageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
