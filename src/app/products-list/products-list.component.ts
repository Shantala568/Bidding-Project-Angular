import { Component, OnInit } from '@angular/core';
import {Product} from '../entities';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { WebClientService } from '../web-client.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  
  products$:Observable<Product[]> | undefined;
  pshoweditmodal = false;
  pshowdeletemodal = false;
  environment=environment;

  constructor(private httpclient:HttpClientModule  , private webclient : WebClientService ){}

  ngOnInit(): void {

    this.products$=this.webclient.get<Product[]>('/product');

  }

 
  pdelModal() {
    this.pshowdeletemodal = true;
  }

  onCloseHandleddel() {
    this.pshowdeletemodal = false;
  }

  onCloseHandlededit() {
    this.pshoweditmodal = false;

  }
  // productlist=[
  //   {id : 1 , category : 'Laptop' , name : 'Asus' , desc : 'BVHBDVHBDEVHBVHB' , o_price : 10000 , s_price : 9000 , e_date : '12/05/23'  , h_bid : 12000 ,t_bids : 3}
  // ]
}
