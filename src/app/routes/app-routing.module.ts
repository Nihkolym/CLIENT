import { OrganisationComponent } from './../components/organisation/organisation.component';
import { AddAnnComponent } from './../components/add-ann/add-ann.component';
import { ProfileComponent } from './../components/profile/profile.component';
import { PetHelperComponent } from './../components/pet-helper/pet-helper.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from '../components/+authentication/containers/registration/registration.component';
import { AuthorizationComponent } from '../components/+authentication/containers/authorization/authorization.component';
import { LoggedGuardService } from '../services/logged-guard.service';
import { AuthenticationGuardService } from '../components/+authentication/services/authentication-guard.service';
import { NeedHelpComponent } from '../components/need-help/need-help.component';
import { RoleGuardService } from '../services/role-guard.service';
import { Role } from '../models/Role';
import { NewOrgComponent } from '../components/new-org/new-org.component';
import { RescuedComponent } from '../components/rescued/rescued.component';

const appRoutes: Routes = [
  { path: 'registration', pathMatch: 'full', component: RegistrationComponent, canActivate: [LoggedGuardService] },
  { path: 'authorization', pathMatch: 'full', component: AuthorizationComponent, canActivate: [LoggedGuardService] },
  { path: 'pet-helper', pathMatch: 'full', component: PetHelperComponent, canActivate: [AuthenticationGuardService] },
  { path: 'profile', pathMatch: 'full', component: ProfileComponent, canActivate: [AuthenticationGuardService] },
  { path: 'org', pathMatch: 'full', component: OrganisationComponent, canActivate: [AuthenticationGuardService] },
  { path: 'rescued', pathMatch: 'full', component: RescuedComponent, canActivate: [AuthenticationGuardService] },
  { path: 'new-org', pathMatch: 'full', component: NewOrgComponent, canActivate: [RoleGuardService], data: {
    expectedRole: Role.Admin
  }, },
  { path: 'need-help', pathMatch: 'full', component: NeedHelpComponent, canActivate: [AuthenticationGuardService] },
  { path: 'add-ann', pathMatch: 'full', component: AddAnnComponent, canActivate: [AuthenticationGuardService] },
  { path: '', pathMatch: 'full', redirectTo: 'pet-helper', },
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
