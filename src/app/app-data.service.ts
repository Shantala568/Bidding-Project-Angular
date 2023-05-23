import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  public publicKey:string|null=null;
  public privateKey:string|null=null;

  constructor() { }
}
