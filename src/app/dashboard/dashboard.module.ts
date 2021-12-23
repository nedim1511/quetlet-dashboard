import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardComponent} from "./dashboard.component";
import {FormsModule} from "@angular/forms";
import {CanActivateDashboard} from "./services/dashboard.guard";
import {ChangeLinkComponent} from "./components/change-link/change-link.component";
import {SharedModule} from "../common/shared.module";
import {ScanHistoryComponent} from "./components/scan-history/scan-history.component";

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
    ScanHistoryComponent,
  ],
  providers: [
    CanActivateDashboard,
  ]
})
export class DashboardModule {}
