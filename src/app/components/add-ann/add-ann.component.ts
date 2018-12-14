import { MyErrorStateMatcher } from './../../models/error.matcher';
import { AnnouncementService } from './../../services/announcement.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-ann',
  templateUrl: './add-ann.component.html',
  styleUrls: ['./add-ann.component.css']
})
export class AddAnnComponent implements OnInit {
  public addForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    geolocation: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  public matcher = new MyErrorStateMatcher();

  @ViewChild('file')
  file: ElementRef;
  constructor(private route: Router, private annService: AnnouncementService) {}

  ngOnInit() {}

  addAnnouncement() {
    if (this.addForm.valid) {
      const formData = new FormData();
      const file: File = this.file.nativeElement.files[0];

      formData.append('photo', file, file.name);
      formData.append('title', this.addForm.controls['title'].value);
      formData.append('description', this.addForm.controls['description'].value);
      formData.append('geolocation', this.addForm.controls['geolocation'].value);

      this.annService.addAnnouncements(formData).subscribe(() => {
        this.route.navigate(['/need-help']);
      });
    }
  }
}
