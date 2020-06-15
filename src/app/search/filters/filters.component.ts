import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { AnnouncementsService } from '../../services/announcements.service';

@Component({
  selector: 'app-search-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent {
  filters = this.formBuilder.group({
    searchInput: [null]
  });

  numberOfAnnouncements;
  announcementsLimitedByNumber;

  constructor(private formBuilder: FormBuilder, private announcementsService: AnnouncementsService) {}

  submit() {
    console.log('Valor de filters:', this.filters.value);
  }

  getAnnouncementsLimitedByNumber() {
    return this.announcementsService
      .getNumberOfAnnouncements(this.numberOfAnnouncements)
      .subscribe(result => (this.announcementsLimitedByNumber = result));
  }
}
