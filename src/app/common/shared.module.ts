import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SuccessCheckmarkComponent} from "./components/success-checkmark/success-checkmark.component";
import {FormHeaderComponent} from "./components/form-header/form-header.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    SuccessCheckmarkComponent,
    FormHeaderComponent,
  ],
  exports: [
    SuccessCheckmarkComponent,
    FormHeaderComponent,
  ]
})
export class SharedModule {}
