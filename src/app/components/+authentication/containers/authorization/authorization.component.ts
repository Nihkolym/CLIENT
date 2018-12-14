import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/models/error.matcher';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  public authorizationForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  public matcher = new MyErrorStateMatcher();

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  public signIn(): void {
    let email: string;
    let password: string;

    email = this.authorizationForm.controls['email'].value;
    password = this.authorizationForm.controls['password'].value;

    this.authService.logIn(email, password).subscribe(
      () => { }, (err) => {
        this.authService.logOrgIn(email, password).subscribe(() => {
          this.authorizationForm.setErrors({
            'badRequest': true
          });
        });
      });
  }
}
