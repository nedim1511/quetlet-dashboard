import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-scan-history',
  templateUrl: './scan-history.component.html',
  styleUrls: [
    '../../../layout/form.css',
    'scan-history.component.css',
    '../../../layout/flexbox.css',
  ],
})
export class ScanHistoryComponent {
  @Output() goToDashboard = new EventEmitter<void>();
}
