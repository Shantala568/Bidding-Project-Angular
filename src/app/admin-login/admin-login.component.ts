import { Component } from '@angular/core';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  constructor(private appdata: AppDataService){}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const fileContent: string = e.target.result;
        // console.log(fileContent);
        const lines=fileContent.split(/[\r\n]+/);
        // console.log(lines);
        this.appdata.privateKey=lines[0];
        this.appdata.publicKey=lines[1];
        // Do something with the file content here
      };
      reader.readAsText(file);
    }
  }
   
}
