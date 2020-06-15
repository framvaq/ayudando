import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from '../services/announcements.service';

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
    console.log('getannouncements');
    this.getAnnouncements();
    console.log('getNUMBERannouncements');
    // console.log(this.announcementsService.getNumberOfAnnouncements(2));
  }

  getAnnouncements() {
    return this.announcementsService.getAnnouncements().subscribe(result => (this.announcements = result));
  }
}
