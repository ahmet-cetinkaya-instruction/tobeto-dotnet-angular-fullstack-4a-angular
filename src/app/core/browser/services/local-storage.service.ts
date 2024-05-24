import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  get<T>(key: string): T | null {
    const item = this.document.defaultView?.localStorage?.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  }

  set(key: string, value: unknown): void {
    this.document.defaultView?.localStorage?.setItem(
      key,
      JSON.stringify(value)
    );
  }

  remove(key: string): void {
    this.document.defaultView?.localStorage?.removeItem(key);
  }

  clear(): void {
    this.document.defaultView?.localStorage?.clear();
  }
}
