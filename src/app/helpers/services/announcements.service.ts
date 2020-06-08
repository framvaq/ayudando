import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Announcement } from '../../announcement';
import { ANNOUNCEMENTS } from '../../mock-announcements';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {
  constructor() {}
  getAnnouncements(): Observable<Announcement[]> {
    return of(ANNOUNCEMENTS);
  }
}
