import { OrganisationService } from './../../services/organisation.service';
import { Role } from 'src/app/models/Role';
import { RoleService } from './../../services/role.service';
import { IOrganisation } from 'src/app/models/Organization';
import { IUser } from 'src/app/models/User';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from 'src/app/models/error.matcher';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: IUser;
  public organisation: IOrganisation;

  Role = Role;

  public profileForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  public matcher = new MyErrorStateMatcher();

  @ViewChild('file')
  file: ElementRef;

  @ViewChild('avatar')
  avatar: ElementRef;

  public avatarSrc: string;

  constructor(
    private route: Router,
    private userService: UserService,
    public roleService: RoleService,
    private orgService: OrganisationService,
  ) {}

  ngOnInit() {
    if (this.roleService.Role === Role.User || this.roleService.Role === Role.Admin) {
      this.profileForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
      });

      this.userService.getUser().subscribe((user) => {
        this.user = user;

        this.avatarSrc = user.avatar ? user.avatar : 'default.png';

        this.profileForm.patchValue(user);
      });
    } else {
      this.profileForm = new FormGroup({
        name: new FormControl('', Validators.required),
        address: new FormControl(''),
        description: new FormControl(''),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', [Validators.required,  Validators.pattern(
          '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'
        )])
      });

      this.orgService.getOrganisation().subscribe((org) => {
        this.organisation = org;

        this.avatarSrc = org.logo ?  org.logo : 'default.png';

        this.profileForm.patchValue(this.organisation);
      });
    }


  }

  changeVal(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = ($event: ProgressEvent) => {
        this.avatar.nativeElement.src = (<FileReader>$event.target).result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  update($event) {
    $event.preventDefault();
    if (this.profileForm.valid) {
      const formData = new FormData();
      const file: File = this.file.nativeElement.files[0];

      if (this.roleService.Role === Role.User || this.roleService.Role === Role.Admin) {
        if (file) {
          formData.append('avatar', file, file.name);
        }
        formData.append('firstName', this.profileForm.controls['firstName'].value);
        formData.append('lastName', this.profileForm.controls['lastName'].value);
        formData.append('email', this.profileForm.controls['email'].value);

        this.userService.updateUser(this.user.id, formData).subscribe(() => {
          this.route.navigate(['/need-help']);
        });
      } else {
        if (file) {
          formData.append('logo', file, file.name);
        }
        formData.append('name', this.profileForm.controls['name'].value);
        if (this.profileForm.controls['description'].value) {
          formData.append('description', this.profileForm.controls['description'].value);
        } else {
          formData.append('description', '');
        }
        formData.append('email', this.profileForm.controls['email'].value);
        if (this.profileForm.controls['address'].value) {
          formData.append('address', this.profileForm.controls['address'].value);
        } else {
          formData.append('address', '');
        }
        formData.append('phone', this.profileForm.controls['phone'].value);

        this.orgService.updateOrganisation(this.organisation.id, formData).subscribe(() => {
          this.route.navigate(['/need-help']);
        });
      }

    }

  }

}
