import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardComponent} from "./dashboard.component";
import {FormsModule} from "@angular/forms";
import {CanActivateDashboard} from "./dashboard.guard";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    CanActivateDashboard,
  ]
})
export class DashboardModule {}
