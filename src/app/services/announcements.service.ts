import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  getAnnouncementsByUser(user) {
    return this.http.get(`${this.baseUrl}/search.php?user=${user}`);
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
    return this.http.get(`${this.baseUrl}/search.php?id=${id}`);
  }

  getFilteredAnnouncements(filters) {
    console.log('filters de fuera', filters);
    this.filters = filters;
    this.generateFiltersUrl(this.filters);
    return this.http.get(`${this.baseUrl}/search.php?${this.filtersUrl}`);
  }

  // ------------- HELPERS ------------- //
  generateFiltersUrl(filters) {
    // console.log('filters de generateFiletersUrl', filters);
    // let consoleMessage = 'CONSOLEMESSAGE: filters.${name} = ${filters[name]}\n';
    this.filtersUrl = this.iterateOverFilters(filters, '').slice(0, -1);
    console.log(this.filtersUrl);
  }

  /*
  
  */
  iterateOverFilters(filters, filtersString) {
    // console.log('filters de generateFiletersUrl', filters);
    // let consoleMessage = 'CONSOLEMESSAGE: filters.${name} = ${filters[name]}\n';

    // Iterate over filters, saving properties in name variable
    for (const name in filters) {
      // consoleMessage += `filters.${name} = ${filters[name]}` + '\n';
      // console.log(filters[name]);

      // If the property is an object, I have to iterate separately
      if (typeof filters[name] === 'object') {
        filtersString += this.iterateOverObject(filters[name]);
      } else if (filters[name]) {
        // Will need to slice the last character
        filtersString += name + '=' + filters[name] + '&';
      }
    }
    // console.log(consoleMessage);
    return filtersString;
  }

  iterateOverObject(object) {
    let url = '';
    for (const name in object) {
      if (object[name]) {
        // This is the true/false value
        url += 'date=' + name + '&';
      }
    }
    return url;
  }
}
