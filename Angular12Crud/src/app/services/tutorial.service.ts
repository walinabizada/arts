import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:1111/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id: Number): Observable<any> {
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

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: string): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
