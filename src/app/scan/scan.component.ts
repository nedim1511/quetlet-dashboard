import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {OrdersService} from "../dashboard/services/orders.service";
import {ScanService} from "./services/scan.service";
import {Order} from "../common/models/order.interface";
import {Version} from "../common/models/version.enum";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css'],
})
export class ScanComponent implements OnInit {

  public order: Order;
  public isLoading: boolean;
  public leaveMessage: boolean;
  public isRedirectingUser: boolean;
  public message: string | undefined;
  public errorMessage: string | undefined;

  constructor(
    private scanService: ScanService,
    private ordersService: OrdersService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.order = {};
    this.isLoading = true;
    this.leaveMessage = false;
    this.isRedirectingUser = false;
  }

  ngOnInit(): void {
    const code =  this.activatedRoute.snapshot.paramMap.get('code');

    if (code) {
      this.ordersService.getOrder(code).subscribe(
        (order) => {
          this.isLoading = false;
          this.order = order;
        },
        (error) => this.handleError(error?.error?.error ?? "There was an error while retrieving a link."));
    } else {
      this.handleError('Scanned code must contain a code: https://myquetlet.com/code');
    }
  }

  public submitScan(): void {

    if (!this.order || !this.order.code || !this.order.activeUrl) {
      this.handleError('There was an error while retrieving a link.');
      return;
    }

    if (!this.isMessageValid()) return;

    this.isRedirectingUser = true;

    if (this.order.version === Version.BASIC) {
      window.location.href = <string>this.order.activeUrl;
      return;
    }

    this.scanService.recordScan(this.order.code, this.order.activeUrl, this.message)
      .subscribe(
        (_) => window.location.href = <string>this.order.activeUrl,
        (_) => window.location.href = <string>this.order.activeUrl
      );
  }

  private handleError(message: string): void {
    this.isLoading = false;
    this.errorMessage = message;
  }

  private isMessageValid(): boolean {
    if (!this.message) return true;

    if (this.message.length > 100) {
      alert('Message must not contain more than 100 characters!');
      return false;
    }

    return true;
  }

  get welcomeMessageText(): string {
    if (this.order.version === Version.BASIC) {
      return 'Click below to visit the link of the scanned person';
    }
    return 'Do you want to send a message to the scanned person?'
  }

  get Version() {
    return Version;
  }
}
