import { Component, ViewChild, OnInit } from '@angular/core';
import { AnnouncementsService } from '../services/announcements.service';
import { Announcement } from '../announcement';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  filters = '';
  results;
  announcements;

  constructor(private announcementsService: AnnouncementsService) {}

  ngOnInit(): void {
    this.results = 3;

    console.log('getannouncements');
    this.getAnnouncementsJSON();
    console.log('getIDannouncements');
    // console.log(this.announcementsService.getAnnouncementsById(1));
    console.log('getNUMBERannouncements');
    // console.log(this.announcementsService.getNumberOfAnnouncements(2));
    console.log('mapAnnouncements');
    // console.log(this.announcementsService.getFilteredAnnouncements());
  }

  getAnnouncementsJSON() {
    return this.announcementsService.getAnnouncements().subscribe(result => (this.announcements = result));
  }
}
