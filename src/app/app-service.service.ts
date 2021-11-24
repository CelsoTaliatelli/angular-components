import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {


  private url = 'https://api.instantwebtools.net/v1/passenger?page=0&size=10';

constructor(private http: HttpClient) {}
  public getAll(): Observable<any[]>{
    return this.http.get<any[]>(`https://api.instantwebtools.net/v1/airlines`)
  }
}
