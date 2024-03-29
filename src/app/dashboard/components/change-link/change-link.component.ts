import {Order} from "../../../common/models/order.interface";
import {LoginService} from "../../../login/services/login.service";
import {Component, EventEmitter, Output} from "@angular/core";
import {OrdersService} from "../../services/orders.service";

@Component({
  selector: 'app-change-link',
  templateUrl: './change-link.component.html',
  styleUrls: [
    '../../../layout/form.css',
    '../../../layout/flexbox.css',
  ]
})
export class ChangeLinkComponent {
  public order: Order | undefined;
  public oldLink: string | undefined;
  public newLink: string | undefined;
  public changeButtonDisabled: boolean;
  public changeLinkSuccessful: boolean;
  public errorMessage: string | undefined;

  @Output() goToDashboard = new EventEmitter<void>();

  constructor(
    private loginService: LoginService,
    private dashboardService: OrdersService,
  ) {
    this.assignAttributes();
    this.changeButtonDisabled = false;
    this.changeLinkSuccessful = false;
  }

  public changeButtonClicked(): void {
    this.errorMessage = undefined;
    this.changeButtonDisabled = true;

    if (this.isNewLinkValid()) {
      this.changeActiveLink();
    }
  }

  private changeActiveLink(): void {
    if (!this.newLink) return;

    this.dashboardService.changeLink(this.newLink).subscribe((order) => {
      if (order) {
        this.changeLinkSuccessful = true;
        this.changeButtonDisabled = false;
        this.loginService.setOrder(order);
        this.assignAttributes();
      } else {
        this.setError('There was an error. Please refresh the page and try again.');
      }
    }, (error) => this.setError(error?.error?.error ?? 'There was an error. Please refresh the page and try again.'));
  }

  private isNewLinkValid(): boolean {
    if (!this.newLink) {
      this.setError('New link is required.');
      return false;
    }

    let url;

    try {
      url = new URL(this.newLink);
    } catch (_) {
      this.setError('Link invalid.<br>Note: Link has to start with http:// or https://');
      return false;
    }

    if (url.protocol === "http:" || url.protocol === "https:") return true;

    this.setError('Link invalid.<br>Note: Link has to start with http:// or https://');
    return false;
  }

  private setError(message: string): void {
    this.errorMessage = message;
    this.changeButtonDisabled = false;
  }

  private assignAttributes(): void {
    this.newLink = undefined;
    this.order = this.loginService.getOrder;
    this.oldLink = "Current link: " + this.order?.activeUrl;
  }
}
