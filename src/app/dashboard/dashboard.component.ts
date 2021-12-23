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
  public pages: { id: number, name: string }[] = [
    {
      id: 1,
      name: 'Promijeni link'
    },
    {
      id: 2,
      name: 'Vidi analitiku'
    }
  ];

  public activePageId: number | undefined;
}
