// export interface Bids{
//   id : number;
//   user_id : number;
//   product_id : number;
//   bid_amount : number;
//   status : number;
//   date_created : string ;
// }

// export interface Categories{
//   id : number;
//   name : string;
// }
export interface Users{
  id : number;
  name : string;
  username : string;
  password : string;
  email : string;
  contact : string;
  address : string;
  type : number;
  date_created : string;
}
export interface Product{
  id : number;
  category_id : number;
  name : string;
  description : string;
  start_bid : number;
  regular_price : number;
  bid_end_datetime : string;
  img_fname : string;
  date_created : string;
}
export interface Category{
  id : number;
  name : string;
}