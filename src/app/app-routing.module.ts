import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {LoginComponent} from './auth/login/login.component';
import {RestoreComponent} from './auth/restore/restore.component';
import {ProductsComponent} from './main/products/products.component';
import {ProductComponent} from './main/products/product/product.component';
import {MainComponent} from './main/main.component';


const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'restore', component: RestoreComponent},
      {path: '', component: LoginComponent}
    ]},
  {path: 'main', component: MainComponent, children: [
      {path: '', redirectTo: 'products', pathMatch: 'full'},
      {path: 'products', component: ProductsComponent},
      {path: 'product/:id', component: ProductComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
