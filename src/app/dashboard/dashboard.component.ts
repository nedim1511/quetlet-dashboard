import {Component} from "@angular/core";
import {LoginService} from "../login/services/login.service";
import {Order} from "../common/models/order.interface";
import { Version } from "../common/models/version.enum";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [
    '../layout/form.css',
    '../layout/flexbox.css',
  ],
  styles: ['.form-group:last-of-type {margin-bottom: 0; text-align: center}']
})
export class DashboardComponent {

  public order: Order | undefined;
  public isChangeLinkActive: boolean | undefined;

  constructor(
    private loginService: LoginService,
  ) {
    this.order = this.loginService.getOrder;
  }

  get Version() {
    return Version;
  }
}
