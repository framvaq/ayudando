import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from '../services/announcements.service';
import { CookieService } from 'ngx-cookie-service';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './userPanel.component.html',
  styleUrls: ['./userPanel.component.scss']
})
export class UserPanelComponent implements OnInit {
  announcements;
  userID = this.cookies.get('token');
  messages = this.getMessages();

  constructor(
    private announcementsService: AnnouncementsService,
    private messagesService: MessagesService,
    private cookies: CookieService
  ) {}

  ngOnInit(): void {
    // this.userID = this.cookies.get('token');
    this.getAnnouncements();
    this.getMessages();
  }

  getAnnouncements() {
    return this.announcementsService.getAnnouncementsByUser(this.userID).subscribe(result => {
      console.log(result);
      return (this.announcements = result);
    });
  }

  getMessages() {
    return this.messagesService.getMessages().subscribe(result => (this.messages = result));
  }
}
