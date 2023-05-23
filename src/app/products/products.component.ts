import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../entities';
import { WebClientService } from '../web-client.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product?:Product;

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private webclient: WebClientService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params)=>{
      let id=params.get("id");
      this.webclient.get<Product>(`/product/${id}`).subscribe((product)=>{
        console.log({product});
        this.product=product;
      });      
    });
  }
  // price=5000;
  // total_bids=14;
  
  // Time=10;
  // product_name="Product Name";
  // prod_desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ullam est nihil blanditiis, eius eligendi distinctio ipsa nesciunt expedita fugit!";
   
  

  // Bidders_list=[
  //   {
  //     'id':1,
  //     'name':'ABC',
  //      'bid':110,
  //   },
  //   {
  //     'id':2,
  //     'name':'ABC1',
  //      'bid':106,
  //   }
  //   ,
  //   {
  //     'id':3,
  //     'name':'ABC2',
  //      'bid':103,
  //   },
  //   {
  //     'id':4,
  //     'name':'ABC3',
  //      'bid':101,
  //   },
  //   {
  //     'id':5,
  //     'name':'ABC4',
  //      'bid':96,
  //   }
  //   ,
  //   {
  //     'id':1,
  //     'name':'ABC',
  //      'bid':110,
  //   },
  //   {
  //     'id':2,
  //     'name':'ABC1',
  //      'bid':106,
  //   }
  //   ,
  //   {
  //     'id':3,
  //     'name':'ABC2',
  //      'bid':103,
  //   },
  //   {
  //     'id':4,
  //     'name':'ABC3',
  //      'bid':101,
  //   },
  //   {
  //     'id':5,
  //     'name':'ABC4',
  //      'bid':96,
  //   },
  //   {
  //     'id':3,
  //     'name':'ABC2',
  //      'bid':103,
  //   }
  // ];
  // max=10000;
  // len = this.Bidders_list.length;
  // imagePath="https://i.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU";
  // // Set the target time as a Date object
// const targetTime = new Date('2023-05-01T00:00:00Z');

// Update the remaining time every second
// setInterval(() => {
//   // Get the current time as a Date object
//   const now = new Date();

//   // Calculate the remaining time in milliseconds
//   const remainingTime = targetTime.getTime() - now.getTime();

//   // Convert the remaining time to hours, minutes, and seconds
//   const hours = Math.floor(remainingTime / (1000 * 60 * 60));
//   const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

//   // Display the remaining time in the console
//   console.log(`Remaining time: ${hours}h ${minutes}m ${seconds}s`);
// }, 1000);



}