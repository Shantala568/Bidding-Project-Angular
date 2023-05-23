import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { MadboardComponent } from './madboard/madboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UsersComponent } from './users/users.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MainpageComponent } from './mainpage/mainpage.component';


@NgModule({
  declarations: [
    AppComponent,
    AdmindashboardComponent,
    AddProductComponent,
    AddUserComponent,
    ProductsComponent,
    ProductsListComponent,
    LoginComponent,
    AdminLoginComponent,
    MadboardComponent,
    CategoryComponent,
    ProductlistComponent,
    UsersComponent,
    ManageproductComponent,
    AboutComponent,
    ContactusComponent,
    MainpageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
