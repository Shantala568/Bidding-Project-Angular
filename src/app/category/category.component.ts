
import { Component, OnInit } from '@angular/core';
import { WebClientService } from '../web-client.service';
import { Category } from '../entities';
import { Observable } from 'rxjs';
import { HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  display = "none";

  editingid:number|null=null;
  prevvalue='';
  categorylist$:Observable<Category[]> | undefined;

  constructor(private httpclient:HttpClientModule  , private webclient : WebClientService ){}


  ngOnInit() {

    this.categorylist$=this.webclient.get<Category[]>('/categories');
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  // categorylist = [
  //   { id: 1, name: "Hello" },
  //   { id: 2, name: "Laptop" }
  // ];

  onEdit(category:any)
  {
    this.prevvalue=category.name;
    this.editingid=category.id;
  }

  onSave(category:any)
  {
    this.editingid=null;
  }

  onCancel(category:any)
  {
    category.name=this.prevvalue;
    this.editingid=null;
  }

}

