import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() imageSrc?: string;
  @Input() imageAlt?: string;
  @Input() imageHeight: number = 200;
  @Input() title!: string;
  @Input() description?: string;
  @Input() buttonLabel!: string;
}
