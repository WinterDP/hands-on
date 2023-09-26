import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent,{
  providers: [
    provideRouter([
      {
        path: 'master',
        loadChildren: () => import('libs/master-page-lib/ui/master-page/src/lib/lib.routes').then(r => r.MASTER_PAGE_ROUTES)
        // Lazy load the master page library only when needed, avoiding slowing down the loading process.
      },
      {
        path: '', redirectTo: 'master', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: 'master', pathMatch: 'full'
      }
    ])
  ]
}).catch((err) =>
  console.error(err)
);
