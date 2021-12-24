import {Component} from "@angular/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [
    '../layout/form.css',
    '../layout/flexbox.css',
  ],
  styles: ['.form-group:last-of-type {margin-bottom: 0;}']
})
export class DashboardComponent {
  public isChangeLinkActive: boolean | undefined;
}
