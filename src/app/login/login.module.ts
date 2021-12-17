import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    LoginRoutingModule,
  ],
  declarations: [
    LoginComponent,
  ]
})
export class LoginModule {}
