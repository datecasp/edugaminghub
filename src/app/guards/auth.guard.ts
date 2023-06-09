import { inject } from '@angular/core';
import {
  Router,
  NavigationExtras,
} from '@angular/router';
import { AuthService } from '../services/auth-service.service';

/**
 * Logic to check if a user can navigate to different routes
 * ATM logged users can navigate to contacts/ Not looged users can´t
 * authGuard is used as flag in app-routing.module paths
 * @returns 
 */
export const authGuard = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (sessionStorage.getItem('token')) {
    return true;
  }

  // Create a dummy session id
  const sessionId = 123456789;

  // Set our navigation extras object
  // that contains our global query params and fragment
  const navigationExtras: NavigationExtras = {
    queryParams: { session_id: sessionId },
    fragment: 'anchor'
  };

  // Navigate to the login page with extras
  return router.createUrlTree(['/login'], navigationExtras);
};


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/