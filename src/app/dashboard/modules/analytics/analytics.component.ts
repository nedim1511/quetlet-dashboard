import {Component, OnInit} from "@angular/core";
import {ScanData} from "../../../scan/models/scan.interface";
import {LoginService} from "../../../login/services/login.service";
import {ScanService} from "../../../scan/services/scan.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-analytics',
  templateUrl: 'analytics.component.html',
  styleUrls: [
    'analytics.component.css',
    '../../../layout/flexbox.css',
  ],
})
export class AnalyticsComponent implements OnInit {

  // Map: url and scanData
  public analyticsMap: Map<string, ScanData[]>;
  public didGetResponseFromServer: boolean;

  constructor(
    private router: Router,
    private scanService: ScanService,
    private loginService: LoginService,
  ) {
    this.didGetResponseFromServer = false;
    this.analyticsMap = new Map<string, ScanData[]>();
  }

  ngOnInit(): void {
    const order = this.loginService.getOrder;

    if (!order || !order.code) return;

    this.scanService.getScansBy(order.code).subscribe((scans) => {
      scans.forEach((scan) => this.analyticsMap.set(scan.url, scan.data));
      this.didGetResponseFromServer = true;
    }, (error) => {
      this.handleError(error?.error?.error ?? 'There was an error. Please refresh the page.');
      this.didGetResponseFromServer = true;
    });
  }

  public goBack(): void {
    this.router.navigate(['/users/dashboard']);
  }

  private handleError(message: string): void {
    alert(message);
  }
}
