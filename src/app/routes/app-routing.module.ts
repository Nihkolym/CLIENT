import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from '../components/+authentication/containers/registration/registration.component';
import { AuthorizationComponent } from '../components/+authentication/containers/authorization/authorization.component';
import { MeComponent } from '../components/me/me.component';
import { LoggedGuardService } from '../services/logged-guard.service';
import { AuthenticationGuardService } from '../components/+authentication/services/authentication-guard.service';

const appRoutes: Routes = [
  { path: 'registration', pathMatch: 'full', component: RegistrationComponent, canActivate: [LoggedGuardService] },
  { path: 'authorization', pathMatch: 'full', component: AuthorizationComponent, canActivate: [LoggedGuardService] },
  { path: 'me', pathMatch: 'full', component: MeComponent, canActivate: [AuthenticationGuardService] },
  { path: '**',   redirectTo: 'registration', },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
