import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ScanComponent} from "./scan.component";
import {ScanRoutingModule} from "./scan-routing.module";
import {ScanService} from "./services/scan.service";

@NgModule({
  imports: [CommonModule, ScanRoutingModule],
  declarations: [ScanComponent],
  providers: [ScanService],
})
export class ScanModule {}
