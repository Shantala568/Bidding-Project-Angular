import { HttpClientModule } from '@angular/common/http';
import { WebClientService } from '../web-client.service';
import { Component, OnInit } from '@angular/core';
import {Users} from '../entities';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  display = "none";
  users$:Observable<Users[]> | undefined;
  showeditmodal = false;
  showdeletemodal = false;

constructor(private httpclient:HttpClientModule  , private webclient : WebClientService ){}

  ngOnInit(): void {

    this.users$=this.webclient.get<Users[]>('/users');

  }
  openModal() {


    this.showeditmodal = true;

    // const ebox = document.getElementById('ebox');
    // const box = document.getElementById('box');
    // if (ebox != null && box != null) {
    //   ebox.style.display = "block";
    //   box.style.display = "none";

    // }



  }





  deleteModal() {

    this.showdeletemodal = true;

    // const box1 = document.getElementById('box');
    //  const ebox1 = document.getElementById('ebox');
    //  if (box1 != null && ebox1!=null ) {
    //   box1.style.display="block";
    //    ebox1.style.display="none";
    // }

    // var val = confirm("Are you sure you want to delete the user?");
    // if (val == true) {
    //   alert("User deleted successfully.");
    // } else {
    // }
  }

  onCloseHandleddel() {
    this.showdeletemodal = false;
    // const box2 = document.getElementById('box');

    // if (box2 != null) {
    //   box2.style.display = "none";
    // }
  }

  onCloseHandlededit() {
    this.showeditmodal = false;
    // const ebox = document.getElementById('ebox');

    // if (ebox != null) {
    //   ebox.style.display = "none";
    // }
  }
  // plist = [
  //   { id: 1, name: "Helli", username: "hello123", type: "bidder" },
  //   { id: 2, name: "Arun", username: "arun123", type: "bidder" }
  // ];
}
