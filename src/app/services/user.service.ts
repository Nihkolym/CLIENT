import { IUser } from './../models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.url;

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<IUser>(this.url + '/users/getUserByToken');
  }

  updateUser(id, formData) {
    return this.http.put<IUser>(this.url + '/users/' + id, formData);
  }
}
