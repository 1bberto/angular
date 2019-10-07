import { Inject } from '@angular/core';
import { Router } from '@angular/router';

@Inject('')
export class AuthService {
  constructor(private router: Router) { }

  /**
   * @description
   * Login the user in the application
   */
  login(userName: string): void {
    localStorage.setItem('user', userName);
    this.router.navigate(['/']);
  }

  /**
   * @description
   * Logout the user
   */
  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  /**
   * @description
   * Check whether the user is looged or not
   */
  isLogged(): boolean {
    return localStorage.getItem('user') !== null;
  }

  /**
   * @description
   * Get the current logged user name
   */
  getLoggedUser(): string {
     return localStorage.getItem('user');
  }
}
