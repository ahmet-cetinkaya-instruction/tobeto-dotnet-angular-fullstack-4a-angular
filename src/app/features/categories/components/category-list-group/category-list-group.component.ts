import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CategoryListItem } from '../../models/category-list-item';
import {
  ListGroupComponent,
  ListGroupItem,
  ListGroupItems,
} from '../../../../shared/components/list-group/list-group.component';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category-list-group',
  standalone: true,
  imports: [CommonModule, ListGroupComponent],
  templateUrl: './category-list-group.component.html',
  styleUrl: './category-list-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListGroupComponent implements OnInit {
  @Input() initialSelectedCategoryId?: number | null;
  @Output() changeSelect = new EventEmitter<number | null>();

  categoryList: CategoryListItem[] = [];

  constructor(private categoriesService: CategoriesService, private change: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.categoriesService.getList().subscribe((categories) => {
      this.categoryList = categories;
      this.change.markForCheck();
    });
  }

  onChangeSelect(selectedItemId: string | null) {
    this.changeSelect.emit(selectedItemId ? Number(selectedItemId) : null);
  }

  get categoryListGroupItems(): ListGroupItems {
    return this.categoryList.map((category) => {
      const categoryListItem: ListGroupItem = {
        id: category.id.toString(),
        label: category.name,
      };
      return categoryListItem;
    });

    // return this.categoryList.map((category) => ({ label: category.name }));
  }
}
