import { Route } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: HelloWorldComponent,
        pathMatch: 'full',
    },

];
