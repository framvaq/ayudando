import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { AnnouncementsService } from '../../services/announcements.service';

@Component({
  selector: 'app-search-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  filters = this.formBuilder.group({
    type: [null],
    date: [null]
    // place: [null]
  });

  numberOfAnnouncements;
  announcementsLimitedByNumber;

  constructor(private formBuilder: FormBuilder, private announcementsService: AnnouncementsService) {}

  submit() {
    console.log('Valor de filters:', this.filters.value);
    console.log('Valor de type:', this.filters.value['type']);
  }

  getAnnouncementsLimitedByNumber() {
    return this.announcementsService
      .getNumberOfAnnouncements(this.numberOfAnnouncements)
      .subscribe(result => (this.announcementsLimitedByNumber = result));
  }
}
