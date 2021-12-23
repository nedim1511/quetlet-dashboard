import {Component} from "@angular/core";
import {LoginService} from "./services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../layout/form.css',
    '../layout/flexbox.css',
  ],
})
export class LoginComponent {
  public pin: string | undefined;
  public emailAddress: string | undefined;

  public isLoginSuccessful: boolean;
  public loginButtonDisabled: boolean;
  public errorMessage: string | undefined;

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {
    this.isLoginSuccessful = false;
    this.loginButtonDisabled = false;
  }

  public loginButtonClicked(): void {
    this.errorMessage = undefined;
    this.loginButtonDisabled = true;

    if (this.isFormValid()) {
      if (!this.emailAddress || !this.pin) return;

      this.loginService.login(this.emailAddress, this.pin)
        .subscribe((order) => {
          this.isLoginSuccessful = true;
          this.loginService.setOrder(order);
          setTimeout(() => {
            this.router.navigate(['/users/dashboard']);
          }, 1500);
        }, (error) => this.setError(error?.error?.error ?? 'Pogrešna email adresa ili PIN.'))
    }
  }

  private isFormValid(): boolean {
    if (!this.emailAddress) {
      this.setError('Email adresa je obavezna.')
      return false;
    } else if (!this.pin) {
      this.setError('PIN je obavezan.');
      return false;
    }

    return true;
  }

  private setError(message: string): void {
    this.errorMessage = message;
    this.loginButtonDisabled = false;
  }
}
