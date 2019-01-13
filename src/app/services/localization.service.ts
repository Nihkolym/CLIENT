import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor(
    private tranService: TranslateService,
  ) {}

  public Init() {
      this.tranService.setDefaultLang('en');

      if (!this.Local) {
        this.Local = 'ua';
      }

      this.tranService.use(this.Local);
  }

  public set Local(val: string) {
      this.tranService.use(val);
      localStorage.setItem('Local', val);
  }

  public get Local() {
      return localStorage.getItem('Local');
  }
}
