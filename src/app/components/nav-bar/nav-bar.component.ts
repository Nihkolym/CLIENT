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

  constructor(private authService: AuthenticationService, private roleService: RoleService) { }

  ngOnInit() {
    this.role = this.roleService.Role;
  }

  logout() {
    this.authService.logOut();
  }
}
