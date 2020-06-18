import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usuario = { sexo: 'h', nombre: 'ejemplo' };
  constructor(private cookies: CookieService) {}

  ngOnInit(): void {
    /*TODOcheckNotifications(){
      return notifications > 0 ? true : false
    }

    notificationsTemplate = 
    `
    This is the {{template}}
    `;

    

    */
  }

  getToken() {
    return this.cookies.get('token');
  }
}
