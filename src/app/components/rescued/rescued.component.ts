import { IAnnouncement } from './../../models/announcement';
import { statuses } from './../../models/statuses';
import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-rescued',
  templateUrl: './rescued.component.html',
  styleUrls: ['./rescued.component.css']
})
export class RescuedComponent implements OnInit {

  public statuses = statuses;

  public announcements: IAnnouncement[];

  constructor(private annService: AnnouncementService) { }

  ngOnInit() {
    this.annService.getRescuedAnnouncements().subscribe(ann => {
      this.announcements = ann;
    });
  }

}
