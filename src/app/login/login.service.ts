import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {User} from "../common/models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private user: User | undefined;
  private readonly URL = '/api/login';

  constructor(
    private http: HttpClient,
  ) {
  }

  get getUser(): User | undefined {
    return this.user;
  }

  public setUser(user: User): void {
    this.user = user;
  }

  public login(email: string, code: string): Observable<User> {
    return this.http.post(this.URL, {email, code})
  }
}
