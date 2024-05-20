import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input() page: number = 1;
  @Input() pageSize: number = 10;
  @Input() totalItemCount: number = 0;
  @Output() pageChange = new EventEmitter<number>();

  onPageChange(newPage: number) {
    this.page = newPage;
    this.pageChange.emit(this.page);
  }

  get pageNumbers(): number[] {
    const pageCount = Math.ceil(this.totalItemCount / this.pageSize);

    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) pageNumbers.push(i);

    return pageNumbers;
  }
  get hasPrevPage(): boolean {
    return this.page > 1;
  }
  get hasNextPage(): boolean {
    return this.page * this.pageSize < this.totalItemCount;
  }
}
