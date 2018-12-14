import { OrganisationService } from './../../services/organisation.service';
import { IOrganisation } from './../../models/organisation';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent implements OnInit {
  @Input() public org: IOrganisation;

  orgCertificate;

  ngOnInit() {
    this.orgCertificate = this.org.certificate;
  }
}
