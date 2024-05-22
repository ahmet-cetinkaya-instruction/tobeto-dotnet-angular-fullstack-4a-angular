import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-my-account-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './my-account-page.component.html',
  styleUrl: './my-account-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyAccountPageComponent { }
