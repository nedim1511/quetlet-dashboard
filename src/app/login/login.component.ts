import {Component} from "@angular/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public code: string | undefined;
  public emailAddress: string | undefined;

  public wrongLoginError: boolean;
  public loginButtonDisabled: boolean;

  constructor() {
    this.wrongLoginError = false;
    this.loginButtonDisabled = false;
  }

  loginButtonClicked(): void {
    this.loginButtonDisabled = true;
  }
}
