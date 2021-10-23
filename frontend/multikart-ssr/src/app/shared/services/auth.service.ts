import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:1111/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(uname: string, password: string): Observable<any>{
    return this.http.post(AUTH_API + 'signin', {
      uname,
      password
    }, httpOptions);
  }

  register(data: {}): Observable<any>{
    return this.http.post(AUTH_API + 'signup', {
      data
    }, httpOptions);
  }
}
