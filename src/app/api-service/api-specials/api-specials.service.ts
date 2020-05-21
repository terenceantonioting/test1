import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiSpecialsService {

  constructor(private http: HttpClient) { }

  public getAllRecipes(): Observable<any> {
    return this.http.get("http://localhost:3001/specials");
  }

}
