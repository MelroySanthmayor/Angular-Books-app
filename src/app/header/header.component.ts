import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@Injectable()
export class HeaderComponent implements OnInit {
  value = "Hey from app Header component!"
  token : string
  toggle: Boolean = false
  querytext: string 
  LoggedIn : boolean
  constructor( public authService : AuthService) {  
    this.LoggedIn = this.authService.getLoggedIN();
    this.authService.changeEmitted$.subscribe(
      text => {
          this.LoggedIn = text;
      });
  }

  ngOnInit() {
    if(localStorage.key(0) !== null){
      this.LoggedIn = true
    }
    else {
      this.LoggedIn = false
    }
  }

  // ngDoCheck() {
  //   // ...
  //   if(localStorage.key(0) !== null){
  //     this.LoggedIn = true
  //   }
  //   else {
  //     this.LoggedIn = false
  //   }
    
  // }

  Headerclick(){
    this.toggle = !this.toggle;

  }

  Logout(){
    localStorage.clear();
    this.LoggedIn = false
  }

}
