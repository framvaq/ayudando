import { Component, ViewChild, OnInit } from '@angular/core';
import { AnnouncementsService } from '../services/announcements.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  filters = '';
  results;

  constructor(private announcementsService: AnnouncementsService) {}

  ngOnInit(): void {
    this.results = 3;
  }
}
