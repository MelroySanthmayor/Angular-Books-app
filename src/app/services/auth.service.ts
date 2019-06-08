import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { HttpHelperService } from '../services/http-helper.service';
@Injectable()
export class AuthService {
  
  constructor(private http: Http, public httpHelperService: HttpHelperService ) {
    
  }
  Login( userdata) : Promise<any>
  {
    
    return this.httpHelperService.http
    .post(this.httpHelperService.apiUrl +'api/auth/login', JSON.stringify(userdata), {headers: this.httpHelperService.headers(null)})
    .toPromise()
    .then(res=>
    { return res.json();
      ;
    })
    .catch(error=>
    {
      
    });
    
  }
}