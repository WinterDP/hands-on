import { Route } from '@angular/router';
import { HelloWordComponent } from './hello-word/hello-word.component';

export const appRoutes: Route[] = [
    {
        path: 'helloword',
        component: HelloWordComponent,
        pathMatch: 'full',
    },

];
