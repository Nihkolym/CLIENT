import { LocalizationService } from './../../services/localization.service';
import { RoleService } from './../../services/role.service';
import { Role } from './../../models/Role';
import { AuthenticationService } from './../+authentication/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public Role = Role;
  public role;

  public checked = false;

  constructor(private authService: AuthenticationService, private roleService: RoleService, private locService: LocalizationService) { }

  ngOnInit() {
    this.role = this.roleService.Role;

    this.checked = this.locService.Local === 'ua' ? true : false;
  }

  logout() {
    this.authService.logOut();
  }

  changeLang(event) {
    if (event.checked) {
      this.locService.Local = 'ua';
    } else {
      this.locService.Local = 'en';
    }
  }
}
