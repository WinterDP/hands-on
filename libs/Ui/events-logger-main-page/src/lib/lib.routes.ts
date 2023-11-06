import { Route } from '@angular/router';
import { EventsLoggerMainPageComponent } from './events-logger-main-page/events-logger-main-page.component';

export const EVENTS_LOGGER_MAIN_PAGE_ROUTES: Route[] = [
  { path: '', component: EventsLoggerMainPageComponent },
  {
    path: 'create-entry',
    loadChildren: () => import('libs/Ui/create-entry-page/src/lib/lib.routes').then(r => r.CREATE_ENTRY_PAGE_ROUTES)
  }
];
