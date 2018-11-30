import { NgModule } from '@angular/core';
import { RegistrationComponent } from './containers/registration/registration.component';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorizationComponent } from './containers/authorization/authorization.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    RegistrationComponent,
    AuthorizationComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],

})
export class AuthenticationModule { }
