import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  // TODO: this should check if the user is logged in and permit to access the restricted routes
  return true;
};
