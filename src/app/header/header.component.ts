import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  value = "Hey from app Header component!"
  toggle: Boolean = false
  constructor() { }

  ngOnInit() {
  }


  Headerclick(){
    this.toggle = !this.toggle;

  }

}
