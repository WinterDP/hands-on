import { CanActivateFn } from '@angular/router';

export const msalGuard: CanActivateFn = (route, state) => {
  return true;
};
