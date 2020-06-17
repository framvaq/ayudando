import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, from } from 'rxjs';
import { filter } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Filters } from '../assets/filters';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {
  id = 1;
  baseUrl = environment.baseUrl;
  filters: Filters;
  filtersUrl: string;

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
   * Returns the announcements published by te specified user
   * @param user The user that published the announcements
   */
  getAnnouncementsByUser(user) {}

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

  getFilteredAnnouncements(filters) {
    // console.log('filters de fuera', filters);
    this.filters = filters;
    this.generateFiltersUrl(this.filters);
    return this.http.get(`${this.baseUrl}/search.php?${this.filtersUrl}`);
  }

  generateFiltersUrl(filters) {
    //console.log('filters de generateFiletersUrl', filters);
    //let consoleMessage = 'CONSOLEMESSAGE: filters.${filter} = ${filters[filter]}\n';

    this.filtersUrl = this.iterateOverFilters(filters, '').slice(0, -1);
    console.log('generateFiltersUrl.filtersString = ', this.filtersUrl);
  }

  /*
  ============ UTILITY FUNCTIONS===========
  */
  iterateOverFilters(filters, filtersString) {
    //console.log('filters de generateFiletersUrl', filters);
    //let consoleMessage = 'CONSOLEMESSAGE: filters.${filter} = ${filters[filter]}\n';

    // Iterate over filters, saving properties in filter variable
    for (const filter in filters) {
      //consoleMessage += `filters.${filter} = ${filters[filter]}` + '\n';
      //console.log(filters[filter]);

      if (filters[filter] !== null) {
        // If the property is an object, for in return object, I have to repeat the function
        if (typeof filters[filter] === 'object') {
          // debugger;
          filtersString += this.iterateOverFilters(filters[filter], ''); // I have to send an empty string so it does not duplicate whatever was in it
        } else if (filters[filter]) {
          filtersString += filter + '=' + filters[filter] + '&'; // Will need to slice the final string
        }
      }
    }
    //console.log(consoleMessage);
    return filtersString;
  }
}
