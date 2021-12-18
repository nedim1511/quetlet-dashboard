import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {NgModule} from "@angular/core";
import {CanActivateDashboard} from "./dashboard.guard";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [CanActivateDashboard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
