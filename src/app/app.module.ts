import { PetHelperComponent } from './components/pet-helper/pet-helper.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routes/app-routing.module';
import { AuthenticationModule } from './components/+authentication/authentication.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './models/token.interceptor';
import { ProfileComponent } from './components/profile/profile.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NeedHelpComponent } from './components/need-help/need-help.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { AddAnnComponent } from './components/add-ann/add-ann.component';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { NewOrgComponent } from './components/new-org/new-org.component';
import { RescuedComponent } from './components/rescued/rescued.component';

@NgModule({
  declarations: [
    AppComponent,
    PetHelperComponent,
    ProfileComponent,
    NavBarComponent,
    NeedHelpComponent,
    AnnouncementComponent,
    AddAnnComponent,
    OrganisationComponent,
    NewOrgComponent,
    RescuedComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserModule,
    AuthenticationModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
      }
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
