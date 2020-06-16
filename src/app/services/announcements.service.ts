import { Injectable } from '@angular/core';

import { Observable, of, from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Announcement } from '../assets/announcement';
import { ANNOUNCEMENTS } from '../assets/mock-announcements';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {
  id = 1;
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}
  /**
   * Returns all announcements
   */
  getAnnouncements() {
    return this.http.get(`${this.baseUrl}/search.php`);
  }

  /**
   * Returns the specified number of announcements
   * // TODOimprove to be able to select when to start getting and when to stop
   * @param num Number of announcements to return
   */
  getNumberOfAnnouncements(num) {
    return this.http.get(`${this.baseUrl}/search.php?num=${num}`);
  }

  /**
   * Returns the specified type of announce
   * @param type Type of announce to receive
   */
  getAnnouncementsByType(type) {
    return this.http.get(`${this.baseUrl}/search.php?type=${type}`);
  }

  /**
   * Returns the specified place of announce
   * @param place Place of announce to receive
   */
  getAnnouncementsByPlace(place) {
    return this.http.get(`${this.baseUrl}/search.php?place=${place}`);
  }

  /**
   * Returns an announce which contains the word
   * @param desc Description of announce to receive
   */
  getAnnouncementsByDescription(desc) {
    return this.http.get(`${this.baseUrl}/search.php?desc=${desc}`);
  }

  /**
   * Returns the announcements with the specified ID
   * @param id The id from the announcement I want to retrieve
   */
  getAnnouncementById(id) {
    // TODOthink of php filename
    return this.http.get(`${this.baseUrl}/search.php?id=${id}`);
  }

  /**
   * Returns the announcements published by te specified user
   * @param user The user that published the announcements
   */
  getAnnouncementsByUser(user) {}

  getFilteredAnnouncements() {
    console.log();
  }
}
