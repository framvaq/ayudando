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

  ngOnInit() {
    // console.log('getannouncements');
    return this.announcementsService.getAnnouncements().subscribe(result => {
      // console.log(result);
      return (this.announcements = result);
    });
  }

  submit() {
    return this.announcementsService
      .getFilteredAnnouncements(this.filters.value)
      .subscribe(result => (this.announcements = result));
  }
}
