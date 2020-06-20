import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  baseUrl = environment.baseUrl;
  user = { user: this.cookies.get('token') };

  constructor(private cookies: CookieService, private http: HttpClient) {}

  getMessages() {
    // console.log(this.user);

    return this.http.post(`${this.baseUrl}/messages.php`, this.user, httpOptions);
  }
}
