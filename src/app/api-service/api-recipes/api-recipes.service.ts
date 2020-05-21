import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiRecipesService {

  constructor(private http: HttpClient) { }

  public getAllRecipes(): Observable<any> {
    return this.http.get("http://localhost:3001/recipes");
  }

}
