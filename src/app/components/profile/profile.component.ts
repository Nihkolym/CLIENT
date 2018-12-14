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

  constructor(private route: Router, private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().subscribe((user) => {
      this.user = user;

      this.avatarSrc = user.avatar ? user.avatar : 'default.png';

      this.profileForm.patchValue(user);
    });
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

      if (file) {
        formData.append('avatar', file, file.name);
      }
      formData.append('firstName', this.profileForm.controls['firstName'].value);
      formData.append('lastName', this.profileForm.controls['lastName'].value);
      formData.append('email', this.profileForm.controls['email'].value);

      this.userService.updateUser(this.user.id, formData).subscribe(() => {
        this.route.navigate(['/need-help']);
      });
    }

  }

}
