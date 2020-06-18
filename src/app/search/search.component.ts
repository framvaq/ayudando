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
    return this.announcementsService.getAnnouncements().subscribe(result => (this.announcements = result));
  }

  submit() {
    // console.log('Valor de place:', this.filters.value.place);
    // console.log('==================');
    // console.log('Valor de type:', this.filters.value.type);
    // console.log('==================');
    // console.log('Valor de date:', this.filters.value.date);
    // console.log('Valores de less1week:', this.filters.value.date.less1week);
    // console.log('Valores de less2weeks:', this.filters.value.date.less2weeks);
    // console.log('Valores de less1month:', this.filters.value.date.less1month);
    // console.log('Valores de more1month:', this.filters.value.date.more1month);
    // console.log('Valores de notdefined:', this.filters.value.date.notdefined);
    // console.log('==================');
    // console.log('Valor de word:', this.filters.value.word);
    // console.log('Valor de number:', this.filters.value.number);
    // console.log('==================');
    // console.log('Valor de filters en searchCOmponent.submit():', this.filters.value);

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
