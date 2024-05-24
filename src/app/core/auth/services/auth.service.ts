import { Injectable } from '@angular/core';
import { AccessTokenPayload } from '../models/access-token-payload';
import { LocalStorageService } from '../../browser/services/local-storage.service';
import { ACCESS_TOKEN_KEY } from '../constants/auth-keys';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Subject'ler Observable'in alt sınıfıdır. Kendi çağrılarımızı -next, error, complete- yapabiliriz. Bu observable yapıya subscribe olan dinleyiciler, subscribe olduktan sonraki çağrıları alabilirler. // @Output'a benzer.
  protected _logged = new Subject<void>();
  public logged: Observable<void> = this._logged.asObservable();

  protected _loggedOut = new Subject<void>();
  public loggedOut: Observable<void> = this._loggedOut.asObservable();

  // BehaviorSubject, bir değer tutar ve bu değeri subscribe olanlara anında mevcut değeri verir. Yeni bir değer yayınlandığında, bu değeri değiştirir ve subscribe olan herkese yeni değeri yayınlar. // Redux'taki store'a benzer.
  protected _isLogged = new BehaviorSubject<boolean>(this.isAuthenticated);
  public isLogged: Observable<boolean> = this._isLogged.asObservable();

  constructor(protected localStorageService: LocalStorageService) {}

  protected get token(): string | null {
    return this.localStorageService.get<string>(ACCESS_TOKEN_KEY);
  }

  public get tokenPayload(): AccessTokenPayload | null {
    if (!this.token) return null;

    const token = this.token;
    // const [header, payload, signature] = token.split('.');
    const [, payload] = token.split('.');

    const decodedPayload = atob(payload);
    const parsedPayload = JSON.parse(decodedPayload) as AccessTokenPayload;

    return parsedPayload;
  }

  logout(): void {
    this.localStorageService.remove(ACCESS_TOKEN_KEY);
    this._loggedOut.next(); // next: Yeni bir event yayınlar, varsa yeni değeri de içerebilir.
    // error(); // error: Observable'a hata ekler.
    // complete(); // complete: Observable'ı tamamlar, artık yeni değer yayınlamaz.
    this._isLogged.next(false);
  }

  get isAuthenticated(): boolean {
    if (!this.token) return false;
    console.log(this.tokenPayload?.exp, Date.now());
    if ((this.tokenPayload?.exp ?? 0) < Date.now() / 1000) {
      this.logout();
      return false;
    }

    return true;
  }

  isAuthroized(reqiredRoleIds: number[]): boolean {
    if (!this.isAuthenticated) return false;
    if (!this.tokenPayload?.roles) return false;

    const userRoles = this.tokenPayload.roles.map((role) => role.roleId) ?? [];
    // for (const reqiredRoleId of reqiredRoleIds)
    //   if (!userRoles.includes(reqiredRoleId)) return false;
    if (
      !reqiredRoleIds.some((reqiredRoleId) => userRoles.includes(reqiredRoleId))
    )
      return false;

    return true;
  }
}
