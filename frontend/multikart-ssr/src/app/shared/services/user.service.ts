import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:1111/api/users';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http: HttpClient) { }
  
  get(id: Number): Observable<any> {
    // const httpOptions = {
    //   headers: new HttpHeaders().set('x-access-token',  this.token.getToken())
    // };
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: {}): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: Number, data: {}): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: Number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  getPublicContent(): Observable<any> {
    return this.http.get(baseUrl + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(baseUrl + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(baseUrl + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(baseUrl + 'admin', { responseType: 'text' });
  }
}
