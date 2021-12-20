import {Component, OnInit} from "@angular/core";
import {LoginService} from "../login/login.service";
import {Order} from "../common/models/order.interface";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [
    '../layout/flexbox.css',
    '../layout/form.css',
  ],
})
export class DashboardComponent implements OnInit {
  public order: Order | undefined;
  public oldLink: string | undefined;
  public newLink: string | undefined;
  public changeButtonDisabled: boolean;
  public errorMessage: string | undefined;

  constructor(
    private loginService: LoginService,
  ) {
    this.changeButtonDisabled = false;
    this.order = this.loginService.getOrder;
    console.log(this.order)
    this.oldLink = "Trenutni link: https://google.ba";
  }

  ngOnInit(): void {
    this.populateCurrentLink();
  }

  public changeButtonClicked(): void {
    this.errorMessage = undefined;
    this.changeButtonDisabled = true;

    if (this.isNewLinkValid()) {
      // Change
    }
  }

  private populateCurrentLink(): void {}

  private isNewLinkValid(): boolean {
    if (!this.newLink) {
      this.setError('Novi link je obavezan.');
      return false;
    }

    const res = this.newLink.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

    if (res !== null) return true;

    this.setError('Nvi link nije ispravan.');
    return false;
  }

  private setError(message: string): void {
    this.errorMessage = message;
    this.changeButtonDisabled = false;
  }
}
