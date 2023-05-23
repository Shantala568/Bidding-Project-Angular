import { Component } from '@angular/core';
import { WebClientService } from '../web-client.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  constructor(private webclient : WebClientService){

  }
  

}
