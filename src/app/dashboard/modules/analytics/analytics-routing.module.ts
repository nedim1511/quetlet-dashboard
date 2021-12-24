import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AnalyticsComponent} from "./analytics.component";
import {CanActivateDashboard} from "../../services/dashboard.guard";

const routes: Routes = [
  {
    path: '',
    component: AnalyticsComponent,
    canActivate: [CanActivateDashboard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsRoutingModule {}
