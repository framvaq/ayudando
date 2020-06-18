import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  createUser(register) {
    // console.log('hola');
    const data = register.value;
    this.iterateOverData(data);
    return this.http.post(`${this.baseUrl}/register.php`, register);
  }

  iterateOverData(values) {
    // console.log('values de iterateOverData', values);
    // let consoleMessage = 'CONSOLEMESSAGE: values.${name} = ${values[name]}\n';
    let JSONstring = '{';

    for (const name in values) {
      if (values[name] !== null && values[name] !== undefined && values[name] !== false) {
        // consoleMessage += `values.${name} = ${values[name]}` + '\n';
        JSONstring += '"' + name + '": "' + values[name] + '", ';
      }
    }
    JSONstring = JSONstring.slice(0, -2) + '}';
    // console.log(consoleMessage);
    console.log(JSONstring);
    /*
{"email": fdfdss, "pass": fsdf, "passver": fsdfs, "place": formentera, "user": fsdf, "type": give, "contactno": true}
    */
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
