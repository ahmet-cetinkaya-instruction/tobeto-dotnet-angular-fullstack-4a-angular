import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaceholderComponent { }
