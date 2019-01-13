import { LocalizationService } from './services/localization.service';
import { AuthenticationService } from './components/+authentication/services/authentication.service';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'pet-helper';

  public isLogedIn = false;

  constructor(private authService: AuthenticationService, private locService: LocalizationService) {
    this.locService.Init();
  }

  ngDoCheck() {
    this.isLogedIn = this.authService.isAuthenticated();
  }
}
