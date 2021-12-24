import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {OrdersService} from "../dashboard/services/orders.service";
import {ScanService} from "./services/scan.service";

@Component({
  selector: 'app-scan',
  template: '<div class="center" *ngIf="!isError"><div class="loader"></div></div>',
  styleUrls: ['./scan.component.css'],
})
export class ScanComponent implements OnInit {

  public isError: boolean | undefined;

  constructor(
    private scanService: ScanService,
    private ordersService: OrdersService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const code =  this.activatedRoute.snapshot.paramMap.get('code');

    if (code) {
      this.ordersService.getOrder(code).subscribe((order) => {
        this.recordScan(order);
      }, (_) => this.handleError("Došlo je do greške prilikom dohvaćanja link-a."));
    } else {
      this.handleError('Skenirani kod mora sadržati šifru: https://myquetlet.com/šifra');
    }
  }

  private recordScan(order: { code: string, activeUrl: string }): void {
    this.scanService.recordScan(order.code, order.activeUrl)
      .subscribe(
        (_) => window.location.href = <string>order.activeUrl,
        (_) => window.location.href = <string>order.activeUrl
      );
  }

  private handleError(message: string): void {
    this.isError = true;
    alert(message)
  }
}
