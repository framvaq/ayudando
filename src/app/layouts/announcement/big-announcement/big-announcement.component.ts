import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from '../../../services/announcements.service';

@Component({
  selector: 'app-big-announcement',
  templateUrl: './big-announcement.component.html',
  styleUrls: ['./big-announcement.component.scss']
})
export class BigAnnouncementComponent implements OnInit {
  announcementsById;
  id;

  constructor(private announcementsService: AnnouncementsService) {}

  ngOnInit(): void {
    this.getAnnouncementById(this.id);
  }

  getAnnouncementById(id) {
    return this.announcementsService.getAnnouncementById(id).subscribe(result => (this.announcementsById = result));
  }
}
