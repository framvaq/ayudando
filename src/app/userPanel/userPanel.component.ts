import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from '../services/announcements.service';
import { CookieService } from 'ngx-cookie-service';
import { MessagesService } from '../services/messages.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-user-panel',
  templateUrl: './userPanel.component.html',
  styleUrls: ['./userPanel.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class UserPanelComponent implements OnInit {
  announcements;
  userID = this.cookies.get('token');
  messages;
  messagesColumns: string[] = ['user_id', 'message', 'date'];

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
    // return this.announcementsService.getAnnouncementsByUser(this.userID).subscribe(result => (this.announcements = result));
    return this.announcementsService.getAnnouncementsByUser(this.userID).subscribe(result => {
      console.log('announcements: ', result);
      return (this.announcements = result);
    });
  }

  getMessages() {
    // return this.messagesService.getMessages().subscribe(result => (this.messages = result));
    return this.messagesService.getMessages().subscribe(result => {
      console.log('messages: ', result);
      return (this.messages = result);
    });
  }

  getFormattedDate() {
    // TODO
  }
}
