import { Role } from 'src/app/models/Role';
import { RoleService } from './../../services/role.service';
import { OrganisationService } from './../../services/organisation.service';
import { subscribeOn } from 'rxjs/operators';
import { AnnouncementService } from './../../services/announcement.service';
import { IAnnouncement } from './../../models/announcement';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-need-help',
  templateUrl: './need-help.component.html',
  styleUrls: ['./need-help.component.css']
})
export class NeedHelpComponent implements OnInit {
  public Role = Role;
  public role;
  public anns: IAnnouncement[];

  constructor(private annService: AnnouncementService, private orgService: OrganisationService, public roleService: RoleService) { }

  ngOnInit() {
    this.role = this.roleService.Role;

    this.annService.getAnnouncements().subscribe((anns) => {
      this.anns = anns;
    });
  }

  public subscribe($event) {
    this.orgService.subscribeOnAnnouncement($event).subscribe(() => {
      this.anns = this.anns.filter((ann) => $event !== ann.id);
    });
  }
}
