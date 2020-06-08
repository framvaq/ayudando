import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from '../../services/announcements.service';

@Component({
  selector: 'app-small-announcement-layout',
  templateUrl: 'small-announcement-layout.component.html',
  styleUrls: ['small-announcement-layout.component.scss']
})
export class SmallAnnouncementLayoutComponent implements OnInit {
  announcements;
  /*
  {{ announcement.id }}
  {{ announcement.title }}
  {{ announcement.description }}
  {{ announcement.date | date: 'shortDate' }}
  {{ announcement.place }}
  {{ announcement.type }}
  */

  getAnnouncements(): void {
    this.announcementsService.getAnnouncements().subscribe(announcements => (this.announcements = announcements));
  }

  constructor(private announcementsService: AnnouncementsService) {}

  ngOnInit(): void {
    this.getAnnouncements();
  }
}
