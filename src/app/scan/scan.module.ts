import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ScanComponent} from "./scan.component";
import {ScanRoutingModule} from "./scan-routing.module";
import {ScanService} from "./services/scan.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule, ScanRoutingModule, FormsModule],
  declarations: [ScanComponent],
  providers: [ScanService],
})
export class ScanModule {}
