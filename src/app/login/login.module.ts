import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../common/shared.module";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        LoginRoutingModule,
        SharedModule
    ],
  declarations: [LoginComponent],
})
export class LoginModule {}
