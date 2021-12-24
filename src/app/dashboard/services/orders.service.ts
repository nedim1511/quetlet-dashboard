import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../../login/services/login.service";
import {Observable, of} from "rxjs";
import {Order} from "../../common/models/order.interface";
import {ChangeLink} from "../models/change-link.interface";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private readonly URL = '/api';

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
  ) {
  }

  public changeLink(newLink: string): Observable<Order> {
    const order = this.loginService.getOrder;

    if (!order) return of();

    const changeLinkBody: ChangeLink = {
      activeUrl: newLink,
      pin: order.pin ?? '',
      email: order.email ?? ''
    }

    return this.http.post(this.URL + '/change-link', changeLinkBody);
  }

  public getOrder(code: string): Observable<{ code: string, activeUrl: string }> {
    return this.http.get<{ code: string, activeUrl: string }>(this.URL + '/orders/' + code);
  }
}
