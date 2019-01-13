import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from './containers/registration/registration.component';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorizationComponent } from './containers/authorization/authorization.component';
import { RouterModule } from '@angular/router';
import { HttpLoaderFactory } from 'src/app/app.module';


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
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],

})
export class AuthenticationModule { }
