import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Communities } from '../assets/places';
import { PLACES } from '../assets/places-values';
import { AnnouncementsService } from '../services/announcements.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  announcements;

  filters = this.formBuilder.group({
    type: [null], // TODOchange according to userType (if both, value = null)
    place: [null],
    word: [null],
    number: [null],
    date: this.formBuilder.group({
      less1week: [false],
      less2weeks: [false],
      less1month: [false],
      more1month: [false],
      notdefined: [false]
    })
  });

  communities: Communities[] = PLACES;

  constructor(private formBuilder: FormBuilder, private announcementsService: AnnouncementsService) {}

  ngOnInit(): void {
    // console.log('getannouncements');
    this.getAnnouncements();
  }

  getAnnouncements() {
    return this.announcementsService.getAnnouncements().subscribe(result => {
      // console.log(result);
      return (this.announcements = result);
    });
  }

  submit() {
    // TODO if there's only one filter, use that method

    this.getFilteredAnnouncements(this.filters.value);
  }

  getAnnouncementsLimitedByNumber(num) {
    return this.announcementsService.getNumberOfAnnouncements(num).subscribe(result => (this.announcements = result));
  }

  getAnnouncementsByType(type) {
    return this.announcementsService.getAnnouncementsByType(type).subscribe(result => (this.announcements = result));
  }

  getAnnouncementsByPlace(place) {
    return this.announcementsService.getAnnouncementsByPlace(place).subscribe(result => (this.announcements = result));
  }

  getAnnouncementsByDescription(word) {
    return this.announcementsService
      .getAnnouncementsByDescription(word)
      .subscribe(result => (this.announcements = result));
  }

  getFilteredAnnouncements(filters) {
    return this.announcementsService
      .getFilteredAnnouncements(filters)
      .subscribe(result => (this.announcements = result));
  }
}
