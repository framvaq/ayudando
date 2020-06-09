import { Component, OnInit } from '@angular/core';

import { AnnouncementsService } from '../helpers/services/announcements.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  announcements;
  filteredAnnounce;

  constructor(private announcementsService: AnnouncementsService) {}

  ngOnInit(): void {
    this.announcements = this.announcementsService.getNumberOfAnnouncements(2);

    /*
    this.getFilteredAnnouncement(1);*/
  }
}
