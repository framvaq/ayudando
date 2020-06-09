import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from 'src/app/services/announcements.service';

@Component({
  selector: 'app-big-announcement-layout',
  templateUrl: './big-announcement-layout.component.html',
  styleUrls: ['./big-announcement-layout.component.scss']
})
export class BigAnnouncementLayoutComponent implements OnInit {
  announcement;
  id = 2;
  constructor(private announcementsService: AnnouncementsService) {}

  ngOnInit(): void {
    this.announcement = this.announcementsService.getAnnouncementsById(this.id);
  }
}
