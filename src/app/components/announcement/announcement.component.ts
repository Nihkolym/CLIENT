import { statuses } from './../../models/statuses';
import { RoleService } from './../../services/role.service';
import { IAnnouncement } from './../../models/announcement';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Role } from 'src/app/models/Role';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  @Input() ann: IAnnouncement;
  @Output() subscribe: EventEmitter<number> = new EventEmitter();

  public Role = Role;
  public role;

  public url = environment.url;
  public statuses = statuses;

  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.role = this.roleService.Role;
  }

  public onSub() {
    this.subscribe.emit(this.ann.id);
  }

}
