import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ProductsComponent } from './products/products.component';
import { MadboardComponent } from './madboard/madboard.component';
import { CategoryComponent } from './category/category.component';
import { UsersComponent } from './users/users.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'addproduct', component: AddProductComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'products/:id', component: ProductsComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'productlist', component: ProductsListComponent},
  { path: 'users', component: UsersComponent},
  { path: 'manageproduct', component: ManageproductComponent},
  { path: 'madboard', component: MadboardComponent},
  { path: 'contact', component: ContactusComponent},
  { path: 'about', component: AboutComponent},
  { path: 'mainpage', component: MainpageComponent},
  { path: 'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
