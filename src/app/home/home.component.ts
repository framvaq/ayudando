import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usuario = { sexo: 'h', nombre: 'ejemplo' };
  constructor() {}

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
}
