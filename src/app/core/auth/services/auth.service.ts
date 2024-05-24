import { Injectable } from '@angular/core';
import { AccessTokenPayload } from '../models/access-token-payload';
import { LocalStorageService } from '../../browser/services/local-storage.service';
import { ACCESS_TOKEN_KEY } from '../constants/auth-keys';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(protected localStorageService: LocalStorageService) {}

  protected get token(): string | null {
    return this.localStorageService.get<string>(ACCESS_TOKEN_KEY);
  }

  protected get tokenPayload(): AccessTokenPayload | null {
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
