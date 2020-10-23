import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RestoreComponent} from './restore/restore.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RestoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }
