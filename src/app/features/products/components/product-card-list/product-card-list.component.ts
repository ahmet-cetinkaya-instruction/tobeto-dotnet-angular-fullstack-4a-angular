import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProductListItem } from '../../models/product-list-item';
import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-product-card-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardListComponent {
  @Input() filterByCategoryId: number | null = null;

  productList: ProductListItem[] = [
    {
      id: 1,
      categoryId: 1, // Beverages
      name: 'Orange Juice',
      price: 2.99,
      description: 'Fresh squeezed orange juice',
      imageUrl: 'https://via.placeholder.com/200',
    },
    {
      id: 2,
      categoryId: 1, // Beverages
      name: 'Apple Juice',
      price: 2.99,
      description: 'Fresh squeezed apple juice',
      imageUrl: 'https://via.placeholder.com/200',
    },
    {
      id: 3,
      categoryId: 2, // Canned Goods
      name: 'Tomato Soup',
      price: 1.99,
      description: 'Classic tomato soup',
      imageUrl: 'https://via.placeholder.com/200',
    },
    {
      id: 4,
      categoryId: 3, // Dairy
      name: 'Milk',
      price: 5,
      description: 'Whole milk',
      imageUrl: 'https://via.placeholder.com/200',
    },
    {
      id: 5,
      categoryId: 4, // Frozen Foods
      name: 'Frozen Pizza',
      price: 10,
      description: 'Pepperoni pizza',
      imageUrl: 'https://via.placeholder.com/200',
    },
    {
      id: 6,
      categoryId: 5, // Meat
      name: 'Ground Beef',
      price: 8,
      description: 'Ground beef',
      imageUrl: 'https://via.placeholder.com/200',
    },
  ]; // Mock Data

  get filteredProductList(): ProductListItem[] {
    let filteredProductList = this.productList;

    if (this.filterByCategoryId) {
      filteredProductList = this.productList.filter(
        (product) => product.categoryId === this.filterByCategoryId
      );
    }

    return filteredProductList;
  }
}
