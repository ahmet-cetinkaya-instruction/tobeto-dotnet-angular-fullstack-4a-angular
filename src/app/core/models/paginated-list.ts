export interface PaginatedList<TListItem> {
  pageIndex: number;
  pageSize: number;
  totalItems: number;
  items: TListItem[];
}
