import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-admin-panel-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-panel-page.component.html',
  styleUrl: './admin-panel-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPanelPageComponent {}
