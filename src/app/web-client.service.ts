import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebClientService {

  private base_url=environment.BASE_URL;
  private token:string='';

  constructor(private http: HttpClient) { }

  public get<T>(url: string)
  {
    return this.http.get<T>(`${this.base_url}${url}`,{headers:{
      // TOKEN: this.token
    }});
  }

  public post<T,U>(url: string, body: T)
  {
    return this.http.post<U>(`${this.base_url}${url}`,body,{headers:{
      // TOKEN: this.token
    }});
  }
}