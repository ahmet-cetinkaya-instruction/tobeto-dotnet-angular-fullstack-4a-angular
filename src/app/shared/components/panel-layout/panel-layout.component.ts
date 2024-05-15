import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ListGroupComponent,
  ListGroupItems,
} from '../list-group/list-group.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-panel-layout',
  standalone: true,
  imports: [CommonModule, ListGroupComponent],
  templateUrl: './panel-layout.component.html',
  styleUrl: './panel-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelLayoutComponent {
  sidebarMenuListItems: ListGroupItems = [
    {
      id: 'categories/new',
      label: 'Categories',
    },
    {
      id: 'products',
      label: 'Products',
    },
  ];

  constructor(private router: Router) {}

  onChangeSidebarMenuSelect(sideMenuListId: string | null) {
    this.router.navigate([sideMenuListId]);
  }
}
