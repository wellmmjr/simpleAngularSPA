import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from './navItem.model';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  baseURL = "http://localhost:3001/menuItens"

  constructor(private httpClient: HttpClient) { }

  listWorkspace(): Observable<MenuItem[]>{
    return this.httpClient.get<MenuItem[]>(this.baseURL)
  }

}
