import { IOrganisation } from 'src/app/models/Organization';
import { OrganisationService } from './../../services/organisation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-org',
  templateUrl: './new-org.component.html',
  styleUrls: ['./new-org.component.css']
})
export class NewOrgComponent implements OnInit {

  public organisations: IOrganisation[];

  constructor(private orgService: OrganisationService) { }

  ngOnInit() {
    this.orgService.getWaitingOrganisations().subscribe((organisations: IOrganisation[]) => {
      this.organisations = organisations;
    });
  }

  public confirm(id) {
    this.orgService.changeOrganisationState(id, 1).subscribe(() => {
      this.organisations = this.organisations.filter((org) => org.id !== id);
    });
  }
}
