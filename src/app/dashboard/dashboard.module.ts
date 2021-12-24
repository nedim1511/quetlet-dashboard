import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardComponent} from "./dashboard.component";
import {FormsModule} from "@angular/forms";
import {CanActivateDashboard} from "./services/dashboard.guard";
import {ChangeLinkComponent} from "./components/change-link/change-link.component";
import {SharedModule} from "../common/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    RouterModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    ChangeLinkComponent,
  ],
  providers: [
    CanActivateDashboard,
  ]
})
export class DashboardModule {}
