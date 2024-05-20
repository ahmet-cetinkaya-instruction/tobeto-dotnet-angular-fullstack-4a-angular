import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductListItem } from '../models/product-list-item';
import { ProductDetail } from '../models/product-detail';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
}) // singleton
export class ProductsService {
  private apiControllerUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

  getList(page: number, pageSize: number = 10): Observable<ProductListItem[]> {
    return this.http
      .get<ProductListItem[]>(this.apiControllerUrl, {
        params: {
          _page: page.toString(),
          _limit: pageSize.toString(),
        },
      })
      .pipe(this.setImageToPlaceHolder()) as Observable<ProductListItem[]>;
  }

  getById(id: number): Observable<ProductDetail> {
    return this.http
      .get<ProductDetail>(`${this.apiControllerUrl}/${id}`)
      .pipe(this.setImageToPlaceHolder()) as Observable<ProductDetail>;
  }

  private setImageToPlaceHolder() {
    return map((response: ProductDetail | ProductListItem[]) => {
      if (response instanceof Array)
        for (const productListItem of response)
          productListItem.imageUrl = 'https://via.placeholder.com/500';
      else response.imageUrl = 'https://via.placeholder.com/500';

      return response;
    });
  }
}
