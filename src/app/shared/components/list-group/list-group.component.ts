import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface ListGroupItem {
  label: string;
}
export type ListGroupItems = ListGroupItem[];

@Component({
  selector: 'app-list-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-group.component.html',
  styleUrl: './list-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListGroupComponent {
  @Input() items: ListGroupItems = [];
  // Input: Component'in kullanıldığı yerden input alabilir böylece dışarıdan veri almak için kullanılır.
}
