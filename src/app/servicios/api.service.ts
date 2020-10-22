import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { itemsMenu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  getMenu(){
    return this.http.get<itemsMenu[]>('/assets/data/menu.json');
  }
}
