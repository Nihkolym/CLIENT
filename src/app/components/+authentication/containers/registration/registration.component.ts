import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/models/error.matcher';
import { AuthenticationService } from '../../services/authentication.service';
import { IUser } from 'src/app/models/User';
import { switchMap } from 'rxjs/operators';
import { IOrganisation } from 'src/app/models/Organization';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Яїє\']*'), Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Яїє\']*'), Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  @ViewChild('user') user: ElementRef;
  @ViewChild('organization') organization: ElementRef;
  @ViewChild('default') default: ElementRef;
  @ViewChild('file') file: ElementRef;

  private signUp;

  public template;

  public matcher = new MyErrorStateMatcher();

  constructor(private authService: AuthenticationService, private cd: ChangeDetectorRef) {
  }

  public getUserRegist() {
    this.template = this.user;

    this.signUp = this.signUpAsUser;
  }

  public getOrganRegist() {
    this.template = this.organization;

    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Яїє\']*'), Validators.minLength(2)]),
      // tslint:disable-next-line:max-line-length
      phone: new FormControl('', [Validators.required, Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

    this.signUp = this.signUpAsOrganization;
  }

  ngOnInit() {
    this.template = this.default;
  }

  public register(event): void {
    event.preventDefault();
    this.signUp();
  }

  private signUpAsUser() {
    let user: IUser;

    user = this.registrationForm.value;

    this.authService.signUpAsUser(user)
      .pipe(
        switchMap(
          () => this.authService.logIn(user.email, user.password),
        )
      )
      .subscribe(
        () => { },
        (error) => {
          this.registrationForm.setErrors({
            'badRequest': true,
          });
        }
      );
  }

  private signUpAsOrganization() {
    const formData = new FormData;
    const registForm = this.registrationForm.value;

    for (const key in registForm) {
      if (key) {
        formData.append(key, registForm[key]);
      }
    }

    const file = this.file.nativeElement.files[0];

    formData.append('certificate', file, file.name);

    this.authService.signUpAsOrganization(formData)
      .subscribe(
        () => { },
        (error) => {
          this.registrationForm.setErrors({
            'badRequest': true,
          });
        }
      );
  }
}
