import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SubmitService } from './submit.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private cookies: CookieService, private submit: SubmitService) {}
}
