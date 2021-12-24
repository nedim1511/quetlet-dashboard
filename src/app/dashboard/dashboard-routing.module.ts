import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {NgModule} from "@angular/core";
import {CanActivateDashboard} from "./services/dashboard.guard";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [CanActivateDashboard]
  },
  {
    path: 'analytics',
    loadChildren: () => import('./modules/analytics/analytics.module').then(m => m.AnalyticsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
