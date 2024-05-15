import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryListItem } from '../models/category-list-item';
import { NewCategory } from '../models/new-category';
import { AddedCategory } from '../models/added-category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  apiControllerUrl = `${environment.apiUrl}/categories`;

  constructor(private http: HttpClient) {}

  getList(): Observable<CategoryListItem[]> {
    return this.http.get<CategoryListItem[]>(this.apiControllerUrl);
  }

  add(category: NewCategory): Observable<AddedCategory> {
    return this.http.post<AddedCategory>(this.apiControllerUrl, category);
  }
}
