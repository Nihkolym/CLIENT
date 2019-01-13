import { IUser } from './../../models/User';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Input() user: IUser;

  public avatar: string;

  ngOnInit() {
    this.avatar = this.user.avatar ? this.user.avatar : 'default.png';
  }

}
