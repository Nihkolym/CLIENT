import { PetHelperComponent } from './components/pet-helper/pet-helper.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routes/app-routing.module';
import { AuthenticationModule } from './components/+authentication/authentication.module';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { TokenInterceptor } from './models/token.interceptor';
import { ProfileComponent } from './components/profile/profile.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NeedHelpComponent } from './components/need-help/need-help.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { AddAnnComponent } from './components/add-ann/add-ann.component';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { NewOrgComponent } from './components/new-org/new-org.component';
import { RescuedComponent } from './components/rescued/rescued.component';
import { UserComponent } from './components/user/user.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { LocalizationService } from './services/localization.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    UserComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserModule,
    TranslateModule,
    AuthenticationModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
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
    TranslateService,
    LocalizationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
