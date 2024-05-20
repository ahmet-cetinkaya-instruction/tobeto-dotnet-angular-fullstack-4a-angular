import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductListItem } from '../models/product-list-item';
import { ProductDetail } from '../models/product-detail';
import { environment } from '../../../../environments/environment';
import { PaginatedList } from '../../../core/models/paginated-list';

@Injectable({
  providedIn: 'root',
}) // singleton
export class ProductsService {
  private apiControllerUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

  getList(
    page: number,
    pageSize: number = 10,
    filters?: { categoryId?: number }
  ): Observable<PaginatedList<ProductListItem>> {
    const queryParams: any = {};
    if (filters?.categoryId) queryParams.categoryId = filters.categoryId;

    // TODO: Implement pagination via query parameters
    return this.http
      .get<ProductListItem[]>(this.apiControllerUrl, {
        params: queryParams,
        //   _page: page.toString(),
        //   _limit: pageSize.toString(),
      })
      .pipe(
        map((response) => {
          // Backend'de bu model yapısının desteğinin henüz eklenmediğini varsayarak frontend tarafında geçici olarak ele aldık.
          const paginatedList: PaginatedList<ProductListItem> = {
            pageIndex: page,
            pageSize,
            totalItems: response.length,
            items: response.slice(pageSize * (page - 1), pageSize * page),
          };
          return paginatedList;
        }),
        this.setImageToPlaceHolder()
      ) as Observable<PaginatedList<ProductListItem>>;
  }

  getById(id: number): Observable<ProductDetail> {
    return this.http
      .get<ProductDetail>(`${this.apiControllerUrl}/${id}`)
      .pipe(this.setImageToPlaceHolder()) as Observable<ProductDetail>;
  }

  private setImageToPlaceHolder() {
    return map((response: ProductDetail | PaginatedList<ProductListItem>) => {
      if ((response as PaginatedList<ProductListItem>).items instanceof Array)
        for (const productListItem of (
          response as PaginatedList<ProductListItem>
        ).items)
          productListItem.imageUrl = 'https://via.placeholder.com/500';
      else
        (response as ProductDetail).imageUrl =
          'https://via.placeholder.com/500';

      return response;
    });
  }
}
