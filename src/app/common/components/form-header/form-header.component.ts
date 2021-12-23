import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['form-header.component.css'],
})
export class FormHeaderComponent {
  @Input() errorMessage: string | undefined;
  @Input() backButtonVisible: boolean | undefined;

  @Output() backButtonClicked = new EventEmitter<void>();
}
