import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../common/models/order.interface";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private order: Order | undefined;
  private readonly URL = '/api/login';

  constructor(
    private http: HttpClient,
  ) {
  }

  get getOrder(): Order | undefined {
    return this.order;
  }

  public setOrder(order: Order): void {
    this.order = order;
  }

  public login(email: string, pin: string): Observable<Order> {
    return this.http.post(this.URL, {email, pin})
  }
}
