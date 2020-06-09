import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from '../../services/announcements.service';

@Component({
  selector: 'app-small-announcement-layout',
  templateUrl: 'small-announcement-layout.component.html',
  styleUrls: ['small-announcement-layout.component.scss']
})
export class SmallAnnouncementLayoutComponent implements OnInit {
  announcement;
  filteredAnnounce;
  /*
  {{ announcement.id }}
  {{ announcement.title }}
  {{ announcement.description }}
  {{ announcement.date | date: 'shortDate' }}
  {{ announcement.place }}
  {{ announcement.type }}
  */
  constructor(private announcementsService: AnnouncementsService) {}

  getAnnouncements() {
    return (this.announcement = this.announcementsService.getAnnouncements());
  }
  getFilteredAnnouncement(id: number) {
    return (this.filteredAnnounce = this.announcementsService.getAnnouncementsById(id));
  }

  ngOnInit() {
    //console.log(this.getFilteredAnnouncement(1));
    this.getFilteredAnnouncement(1);
  }
}
