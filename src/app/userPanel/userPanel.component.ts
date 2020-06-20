import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from '../services/announcements.service';
import { SubmitService } from '../services/submit.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './userPanel.component.html',
  styleUrls: ['./userPanel.component.scss']
})
export class UserPanelComponent implements OnInit {
  announcements;
  userID;
  messages = [
    {
      id: 'message1',
      message: 'message',
      user_id: 'usid2'
    },
    {
      id: 'message2',
      message: 'message',
      user_id: 'usid1'
    }
  ];

  constructor(private announcementsService: AnnouncementsService, private submitService: SubmitService) {}

  ngOnInit(): void {
    this.userID = this.submitService.userId;
    this.getAnnouncements();
  }

  getAnnouncements() {
    return this.announcementsService.getAnnouncementsByUser(this.userID).subscribe(result => {
      console.log(result);
      return (this.announcements = result);
    });
  }
}
