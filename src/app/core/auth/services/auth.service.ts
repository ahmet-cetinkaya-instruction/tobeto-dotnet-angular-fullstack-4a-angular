import { Injectable } from '@angular/core';
import { AccessTokenPayload } from '../models/access-token-payload';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  protected get token(): string | null {
    return localStorage.getItem('access_token');
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
    localStorage.removeItem('access_token');
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
