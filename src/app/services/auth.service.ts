import { Injectable } from '@angular/core';
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
  getUserdetails(token) : Promise<any>
  {
    return this.httpHelperService.http.get(this.httpHelperService.apiUrl +'books/list',{headers: this.httpHelperService.headers(token)})
    .toPromise()
    .then(res => 
      { return res.json();})
      .catch( error =>
        {

        });
  }

  getFilteredBooks(param,token) : Promise<any>
  {
    return this.httpHelperService.http.get(this.httpHelperService.apiUrl +'books/filter?text='+param,{headers: this.httpHelperService.headers(token)})
    .toPromise()
    .then(res => 
      { return res.json();})
      .catch( error =>
        {

        });
  }
  createBook(param, token) : Promise<any>
  {
    return this.httpHelperService.http
    .post(this.httpHelperService.apiUrl +'books/create',JSON.stringify(param), {headers: this.httpHelperService.headers(token)})
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