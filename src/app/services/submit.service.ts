import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SubmitService {
  baseUrl = environment.baseUrl;
  isLoggedIn = false;
  constructor(private http: HttpClient, private cookies: CookieService, private router: Router) {}

  createUser(register) {
    const data = this.iterateOverData(register.value);

    return this.http.post(`${this.baseUrl}/register.php`, data, httpOptions);
  }

  login(user) {
    const data = this.iterateOverData(user.value);

    return this.http.post(`${this.baseUrl}/login.php`, data, httpOptions).subscribe(response => {
      // console.log(response);
      /* tslint:disable:no-string-literal */
      if (response['res'] !== null) {
        this.setToken(response['token']);
        console.log('response.token', response['token']);
        /* tslint:enable:no-string-literal */
        this.router.navigate(['inicio']);
        this.isLoggedIn = true;
        return true;
      } else {
        alert('Usuario o contraseña incorrectos');
        return false;
      }
    });
  }

  logout() {
    this.isLoggedIn = false;
    return false;
  }

  setToken(token) {
    this.cookies.set('token', token);
  }

  iterateOverData(values) {
    // console.log('values de iterateOverData', values);
    // let consoleMessage = 'CONSOLEMESSAGE: values.${name} = ${values[name]}\n';
    let JSONstring = '{';

    for (const name in values) {
      if (values[name] !== null && values[name] !== undefined && values[name] !== false) {
        // consoleMessage += `values.${name} = ${values[name]}` + '\n';
        if (name.includes('contact')) {
          JSONstring += '"contact": "' + name + '", ';
        } else {
          JSONstring += '"' + name + '": "' + values[name] + '", ';
        }
      }
    }
    JSONstring = JSONstring.slice(0, -2) + '}';
    // console.log(consoleMessage);
    // console.log(JSONstring);
    return JSONstring;
  }

  /* TODO handleErrors
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Error:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message
    return throwError('No se ha podido procesar la solicitud');
  }
  */
}
