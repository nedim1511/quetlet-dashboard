import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AnalyticsComponent} from "./analytics.component";
import {AnalyticsRoutingModule} from "./analytics-routing.module";
import {SharedModule} from "../../../common/shared.module";
import {ScanService} from "../../../scan/services/scan.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AnalyticsRoutingModule
  ],
  declarations: [AnalyticsComponent],
  providers: [ScanService]
})
export class AnalyticsModule {
}
