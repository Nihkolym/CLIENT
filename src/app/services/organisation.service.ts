import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IOrganisation } from '../models/organisation';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {
  public url = environment.url;
  constructor(private http: HttpClient) { }


  getOrganisation() {
    return this.http.get<IOrganisation>(this.url + '/organisations/me');
  }

  updateOrganisation(id: number, org: FormData) {
    return this.http.put<IOrganisation>(this.url + '/organisations/' + id, org);
  }

  getOrganisations() {
    return this.http.get<IOrganisation[]>(this.url + '/organisations');
  }

  getWaitingOrganisations() {
    return this.http.get<IOrganisation[]>(this.url + '/organisations/waiting');
  }

  subscribeOnAnnouncement(id) {
    return this.http.post<void[]>(this.url + '/organisations/' + id + '/subscribe', {});
  }

  changeOrganisationState(organisationId: number, state) {
    return this.http.put<void>(this.url + '/users/changeOrganisationState', {organisationId, state});
  }
}
