import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  value = "Hey from app Header component!"
  token : string
  toggle: Boolean = false
  querytext: string 
  LoggedIn = false
  constructor( public authService : AuthService) { }

  ngOnInit() {
    if(localStorage.key(0) !== null){
      this.LoggedIn = true
    }
    else {
      this.LoggedIn = false
    }
  }


  Headerclick(){
    this.toggle = !this.toggle;

  }

}
