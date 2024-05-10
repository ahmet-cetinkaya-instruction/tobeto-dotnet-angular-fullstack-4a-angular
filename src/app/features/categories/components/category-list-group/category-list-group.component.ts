import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryListItem } from '../../models/category-list-item';
import {
  ListGroupComponent,
  ListGroupItem,
  ListGroupItems,
} from '../../../../shared/components/list-group/list-group.component';

@Component({
  selector: 'app-category-list-group',
  standalone: true,
  imports: [CommonModule, ListGroupComponent],
  templateUrl: './category-list-group.component.html',
  styleUrl: './category-list-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListGroupComponent {
  categoryList: CategoryListItem[] = [
    { id: 1, name: 'Beverages' },
    { id: 2, name: 'Canned Goods' },
    { id: 3, name: 'Dairy' },
    { id: 4, name: 'Frozen Foods' },
    { id: 5, name: 'Meat' },
    { id: 6, name: 'Produce' },
    { id: 7, name: 'Snacks' },
  ]; // Mock data

  get categoryListGroupItems(): ListGroupItems {
    return this.categoryList.map((category) => {
      const categoryListItem: ListGroupItem = {
        label: category.name,
      };
      return categoryListItem;
    });

    // return this.categoryList.map((category) => ({ label: category.name }));
  }
}
