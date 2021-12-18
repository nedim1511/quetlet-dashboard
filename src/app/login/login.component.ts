import {Component} from "@angular/core";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../layout/flexbox.css',
    '../layout/form.css',
  ],
})
export class LoginComponent {
  public code: string | undefined;
  public emailAddress: string | undefined;

  public loginButtonDisabled: boolean;
  public errorMessage: string | undefined;

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {
    this.loginButtonDisabled = false;
  }

  public loginButtonClicked(): void {
    this.errorMessage = undefined;
    this.loginButtonDisabled = true;

    if (this.isFormValid()) {
      if (!this.emailAddress || !this.code) return;

      this.loginService.login(this.emailAddress, this.code)
        .subscribe((user) => {
          this.loginService.setUser(user);
          this.router.navigate(['/dashboard']);
        }, (error) => this.setError(error?.error?.error ?? 'Pogrešna email adresa ili šifra.'))
    }
  }

  private isFormValid(): boolean {
    if (!this.emailAddress) {
      this.setError('Email adresa je obavezna.')
      return false;
    } else if (!this.code) {
      this.setError('Šifra je obavezna.');
      return false;
    }

    return true;
  }

  private setError(message: string): void {
    this.errorMessage = message;
    this.loginButtonDisabled = false;
  }
}
