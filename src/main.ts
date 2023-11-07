import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import {provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MasterPageComponent } from 'libs/Ui/master-page/src/lib/master-page/master-page.component';

bootstrapApplication(MasterPageComponent,{
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter([
      {
        path: 'home', 
        loadChildren: () => import('libs/Ui/landing-page/src/lib/lib.routes').then(r => r.LANDING_PAGE_ROUTES)
            // Lazy load the library only when needed, avoiding slowing down the loading process.
      },
      {
        path: 'login',
        loadChildren: () => import('libs/Ui/login-page/src/lib/lib.routes').then(r => r.LOGIN_PAGE_ROUTES)
      },
      {
        path: 'events-logger',
        loadChildren: () => import('libs/Ui/events-logger-main-page/src/lib/lib.routes').then(r => r.EVENTS_LOGGER_MAIN_PAGE_ROUTES)
      },
      {
        path: 'singup',
        loadChildren: () => import('libs/Ui/signup-page/src/lib/lib.routes').then(r => r.SIGNUP_PAGE_ROUTES)
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
