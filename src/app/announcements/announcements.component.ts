import { Component, OnInit } from '@angular/core';

import { AnnouncementsService } from '../helpers/services/announcements.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  announcements;
  anuncioFiltrado;
  /*
  getAnnouncements() {
    return this.announcementsService.getAnnouncements();
  }

  getFilteredAnnouncement(id: number) {
    return this.announcementsService.getAnnouncementsById(1);
  }*/

  constructor(private announcementsService: AnnouncementsService) {}

  ngOnInit(): void {
    /*this.getAnnouncements();

    this.getFilteredAnnouncement(1);*/
  }
}
