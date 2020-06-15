import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
    date: [null] // WIP
    // place: [null]
  });

  numberOfAnnouncements;
  announcementsLimitedByNumber;

  constructor(private formBuilder: FormBuilder, private announcementsService: AnnouncementsService) {}

  ngOnInit(): void {
    console.log('getannouncements');
    this.getAnnouncements();
    console.log('getNUMBERannouncements');
    // console.log(this.announcementsService.getNumberOfAnnouncements(2));
  }

  getAnnouncements() {
    return this.announcementsService.getAnnouncements().subscribe(result => (this.announcements = result));
  }

  /*********************************************************************
   *************************** FILTERS LOGIC ***************************
   *********************************************************************/

  submit() {
    console.log('Valor de filters:', this.filters.value);
    console.log('Valor de type:', this.filters.value.type);
    console.log('Valor de date:', this.filters.value.date);
  }

  getAnnouncementsLimitedByNumber() {
    return this.announcementsService
      .getNumberOfAnnouncements(this.numberOfAnnouncements)
      .subscribe(result => (this.announcementsLimitedByNumber = result));
  }
  /*




  */
}
