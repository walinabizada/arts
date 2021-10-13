import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:1111/api/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }
  
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
}
