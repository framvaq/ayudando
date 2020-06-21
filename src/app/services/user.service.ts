import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  id;
  constructor(private cookies: CookieService, private authService: AuthService) {
    this.id = authService.userId;
  }
}
