import {Component, OnInit} from "@angular/core";
import {LoginService} from "./services/login.service";
import {Router} from "@angular/router";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../layout/form.css',
    '../layout/flexbox.css',
  ],
})
export class LoginComponent implements OnInit {
  public pin: string | undefined;
  public emailAddress: string | undefined;

  public isLoginSuccessful: boolean;
  public loginButtonDisabled: boolean;
  public errorMessage: string | undefined;

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,
    private loginService: LoginService,
  ) {
    this.isLoginSuccessful = false;
    this.loginButtonDisabled = false;
  }

  ngOnInit(): void {
    this.setSEO();
  }

  public loginButtonClicked(): void {
    this.errorMessage = undefined;
    this.loginButtonDisabled = true;

    if (this.isFormValid()) {
      if (!this.emailAddress || !this.pin) return;

      this.loginService.login(this.emailAddress.toLowerCase(), this.pin)
        .subscribe((order) => {
          this.isLoginSuccessful = true;
          this.loginService.setOrder(order);
          setTimeout(() => {
            this.router.navigate(['/users/dashboard']);
          }, 1500);
        }, (error) => this.setError(error?.error?.error ?? 'Wrong email address or PIN.'))
    }
  }

  private isFormValid(): boolean {
    if (!this.emailAddress) {
      this.setError('Email address is required.')
      return false;
    } else if (!this.pin) {
      this.setError('PIN is required.');
      return false;
    }

    return true;
  }

  private setError(message: string): void {
    this.errorMessage = message;
    this.loginButtonDisabled = false;
  }

  private setSEO(): void {
    this.title.setTitle('MyQuetlet | Change QR code link ili view analytics');
    this.meta.addTag({name: 'description', content: 'Official application by Quetlet for changing links of QR codes on your clothes, and additional Premium features like analytics and messaging.'});
  }
}
