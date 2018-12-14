import { IAnnouncement } from './../models/announcement';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private readonly url = environment.url;

  constructor(private http: HttpClient) { }

  public getAnnouncements() {
    return this.http.get<IAnnouncement[]>(this.url + '/announcements');
  }

  public getSubscribedAnnouncements() {
    return this.http.get<IAnnouncement[]>(this.url + '/announcements/subscribed');
  }

  public addAnnouncements(formData) {
    return this.http.post<void>(this.url + '/announcements', formData);
  }

  public changeAnnouncementStatus(id, status) {
    return this.http.put<void>(this.url + '/announcements/' + id + '/changeStatus', {status});
  }

  public getRescuedAnnouncements() {
    return this.http.get<IAnnouncement[]>(this.url + '/announcements/rescued');
  }
}
