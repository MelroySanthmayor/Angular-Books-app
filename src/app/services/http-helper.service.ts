import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from './../../environments/environment';

@Injectable()
export class HttpHelperService {
  public authHeaders = new Headers({'Content-Type': 'application/json'});
  public apiUrl = environment.apiUrl;

  constructor(public http: Http) {
    this.authHeaders = new Headers({'Content-Type': 'application/json'});
    this.apiUrl = environment.apiUrl;
  }

  headers(auth_token: string): Headers {
    this.authHeaders = new Headers({'Content-Type': 'application/json'});
    if(auth_token) {
      this.authHeaders.append('x-access-token', auth_token);
    }
    return this.authHeaders;
  }

  // returns the headers with auth key if present
  // addAuthInHeaders(auth_token: string): void {
  //   this.headers.append('Authorization', auth_token);
}
