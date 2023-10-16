import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import {  HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

bootstrapApplication(AppComponent,{
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter([
      {
        path: 'master',
        loadChildren: () => import('libs/ui/master-page/src/lib/lib.routes').then(r => r.MASTER_PAGE_ROUTES)
        // Lazy load the master page library only when needed, avoiding slowing down the loading process.
      },
      {
        path: 'login',
        loadChildren: () => import('libs/ui/login/src/lib/lib.routes').then(r => r.LOGIN_ROUTES)
        // Lazy load the master page library only when needed, avoiding slowing down the loading process.
      },
      {
        path: '', redirectTo: 'login', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: 'login', pathMatch: 'full'
      }
    ])
  ]
}).catch((err) =>
  console.error(err)
);
