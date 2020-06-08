import { Injectable } from '@angular/core';

import { Observable, of, from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Announcement } from '../../announcement';
import { ANNOUNCEMENTS } from '../../mock-announcements';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {
  constructor() {}
  getAnnouncements() {
    return ANNOUNCEMENTS;
  }

  getAnnouncementsById(id) {
    return ANNOUNCEMENTS[--id];
  }
}
