import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { MsalModule, MsalInterceptor, MSAL_INSTANCE, MsalInterceptorConfiguration, MsalGuardConfiguration, MSAL_GUARD_CONFIG, MSAL_INTERCEPTOR_CONFIG, MsalService, MsalGuard, MsalBroadcastService } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication, InteractionType, } from '@azure/msal-browser';
import {  HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
//import { environment } from '../environments/environment';

export function MSALInstanceFactory(): IPublicClientApplication{
  return new PublicClientApplication({ 
    auth: {
      clientId: 'fae13158-a7c9-4fd7-b59a-1193297b3fd0',
      redirectUri: 'http://localhost:4200',
      postLogoutRedirectUri: 'http://localhost:4200'
    },
    system: {
        allowNativeBroker: false, // Disables native brokering support
    }
  })
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', ['user.read']);

  return { interactionType: InteractionType.Redirect };
}

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  //protectedResourceMap.set(environment.apiConfig.uri, environment.apiConfig.scopes);

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap
  };
}

bootstrapApplication(AppComponent,{
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
        provide: MSAL_INSTANCE,
        useFactory: MSALInstanceFactory
    },
    {
        provide: MSAL_GUARD_CONFIG,
        useFactory: MSALGuardConfigFactory
    },
    {
        provide: MSAL_INTERCEPTOR_CONFIG,
        useFactory: MSALInterceptorConfigFactory
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService,
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
