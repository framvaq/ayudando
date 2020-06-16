import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl } from '@angular/forms';

import { AnnouncementsService } from '../services/announcements.service';
import { PLACES } from '../assets/places-values';

interface Province {
  value: string;
  viewValue: string;
}

interface Communities {
  name: string;
  provinces: Province[];
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  announcements;
  numberOfAnnouncements;
  announcementsLimitedByNumber;

  filters = this.formBuilder.group({
    type: [null], // TODOchange according to userType (if both, value = null)
    place: [null],
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
    console.log('getannouncements');
    this.getAnnouncements();
    console.log('getNUMBERannouncements');
    // console.log(this.announcementsService.getNumberOfAnnouncements(2));
  }

  getAnnouncements() {
    return this.announcementsService.getAnnouncements().subscribe(result => (this.announcements = result));
  }

  submit() {
    console.log('Valor de filters:', this.filters.value);
    console.log('=============================');
    console.log('Valor de place:', this.filters.value.place);
    console.log('=============================');
    console.log('Valor de type:', this.filters.value.type);
    console.log('=============================');
    console.log('Valor de date:', this.filters.value.date);
    console.log('Valores de less1week:', this.filters.value.date.less1week);
    console.log('Valores de less2weeks:', this.filters.value.date.less2weeks);
    console.log('Valores de less1month:', this.filters.value.date.less1month);
    console.log('Valores de more1month:', this.filters.value.date.more1month);
    console.log('Valores de notdefined:', this.filters.value.date.notdefined);
  }

  getAnnouncementsLimitedByNumber() {
    return this.announcementsService
      .getNumberOfAnnouncements(this.numberOfAnnouncements)
      .subscribe(result => (this.announcementsLimitedByNumber = result));
  }
  /*




  */
}
