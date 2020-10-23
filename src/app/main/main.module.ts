import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from './main.component';
import {ProductsComponent} from './products/products.component';
import {ProductComponent} from './products/product/product.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    MainComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MainModule { }
