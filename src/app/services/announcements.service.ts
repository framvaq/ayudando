import { Injectable } from '@angular/core';

import { Observable, of, from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Announcement } from '../announcement';
import { ANNOUNCEMENTS } from '../mock-announcements';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {
  constructor() {}
  /**
   * Returns all the announcements
   */
  getAnnouncements() {
    return ANNOUNCEMENTS;
  }

  /**
   * Returns the specified number of announcements
   * @param num Number of announcements to return
   */
  getNumberOfAnnouncements(num) {
    // console.log(ANNOUNCEMENTS.filter(announce => announce.id <= num));
    return ANNOUNCEMENTS.filter(announce => announce.id <= num);
  }

  /**
   * Returns the announcements with the specified ID
   * @param id The id from the announcement I want to retrieve
   */
  getAnnouncementsById(id) {
    return ANNOUNCEMENTS[--id];
  }
}
