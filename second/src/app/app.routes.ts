import {DashboardComponent} from './dashboard/dashboard.component';
import {EventComponent} from './event/event.component';
import {RouterModule,Route} from '@angular/router';

const routes: Route[]=[
{path:"home",component:DashboardComponent},
{path:"", component:DashboardComponent},
{path:"addEvent",component:EventComponent}
];

export const RoutesProvider = RouterModule.forRoot(routes);
