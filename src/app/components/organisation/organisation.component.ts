import { Router } from '@angular/router';
import { MyErrorStateMatcher } from 'src/app/models/error.matcher';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrganisationService } from './../../services/organisation.service';
import { IOrganisation } from './../../models/organisation';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent implements OnInit {
  @Input() public org: IOrganisation;

  public logo: string;

  ngOnInit() {
    this.logo = this.org.logo ? this.org.logo : 'default.png';
  }
}
