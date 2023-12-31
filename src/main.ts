import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import {provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MasterPageComponent } from 'libs/ui/master-page/src/lib/master-page/master-page.component';

bootstrapApplication(MasterPageComponent,{
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter([
      {
        path: 'home', 
        loadChildren: () => import('libs/ui/master-page/src/lib/landing-page/src/lib/lib.routes').then(r => r.LANDING_PAGE_ROUTES)
            // Lazy load the library only when needed, avoiding slowing down the loading process.
      },
      {
        path: 'login',
        loadChildren: () => import('libs/ui/master-page/src/lib/login/src/lib/lib.routes').then(r => r.LOGIN_ROUTES)
        // Lazy load the master page library only when needed, avoiding slowing down the loading process.
      },
      {
        path: 'events-logger',
        loadChildren: () => import('libs/ui/master-page/src/lib/events-logger-main-page/src/lib/lib.routes').then(r => r.EVENTS_LOGGER_MAIN_PAGE_ROUTES)
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: 'home', pathMatch: 'full'
      }
    ])
  ]
}).catch((err) =>
  console.error(err)
);
