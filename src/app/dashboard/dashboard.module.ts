import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardComponent} from "./dashboard.component";
import {FormsModule} from "@angular/forms";
import {CanActivateDashboard} from "./services/dashboard.guard";
import {ChangeLinkComponent} from "./components/change-link/change-link.component";
import {DashboardService} from "./services/dashboard.service";
import {SharedModule} from "../common/shared.module";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    ChangeLinkComponent,
  ],
  providers: [
    DashboardService,
    CanActivateDashboard,
  ]
})
export class DashboardModule {}
