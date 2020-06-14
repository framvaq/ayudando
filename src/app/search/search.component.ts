import { Component, ViewChild, OnInit } from '@angular/core';
import { AnnouncementsService } from '../services/announcements.service';
import { Announcement } from '../announcement';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  filters = '';
  results;
  numberOfAnnouncements;
  announcements;
  announcementsById;
  announcementsLimitedByNumber;
  announcementsFiltered;

  constructor(private announcementsService: AnnouncementsService) {}

  ngOnInit(): void {
    this.results = 3;

    console.log('getannouncements');
    this.getAnnouncements();
    console.log('getIDannouncements');
    // console.log(this.announcementsService.getAnnouncementsById(1));
    console.log('getNUMBERannouncements');
    // console.log(this.announcementsService.getNumberOfAnnouncements(2));
    console.log('mapAnnouncements');
    // console.log(this.announcementsService.getFilteredAnnouncements());
  }

  getAnnouncements() {
    return this.announcementsService.getAnnouncements().subscribe(result => (this.announcements = result));
  }

  getAnnouncementsById() {
    return this.announcementsService.getAnnouncements().subscribe(result => (this.announcementsById = result));
  }

  getAnnouncementsLimitedByNumber() {
    return this.announcementsService
      .getNumberOfAnnouncements(this.numberOfAnnouncements)
      .subscribe(result => (this.announcementsLimitedByNumber = result));
  }
}
