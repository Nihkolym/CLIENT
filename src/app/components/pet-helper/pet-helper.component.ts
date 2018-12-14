import { AnnouncementService } from './../../services/announcement.service';
import { IAnnouncement } from './../../models/announcement';
import { RoleService } from './../../services/role.service';
import { Role } from './../../models/Role';
import { OrganisationService } from './../../services/organisation.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { statuses } from 'src/app/models/statuses';
import { MatSelect } from '@angular/material';

@Component({
  selector: 'app-pet-helper',
  templateUrl: './pet-helper.component.html',
  styleUrls: ['./pet-helper.component.css']
})
export class PetHelperComponent implements OnInit {

  public Role = Role;
  public role;
  public statuses = statuses;

  show = false;
  announcements: IAnnouncement[];
  orgs = [];

  constructor(
    private orgService: OrganisationService,
    private roleService: RoleService,
    private annService: AnnouncementService
  ) { }

  getOrgs() {
    this.orgService.getOrganisations().subscribe((orgs) => {
      this.orgs = orgs;
    });
  }

  ngOnInit() {
    this.role = this.roleService.Role;

    if (this.role === Role.Organisation) {
      this.annService.getSubscribedAnnouncements().subscribe((anns) => {
        this.announcements = anns;
      });
    }
  }

  public changeStatus($event, id: number) {
    this.annService.changeAnnouncementStatus(id, $event.value).subscribe();
  }
}
