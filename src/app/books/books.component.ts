import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  token : string
  success = true
  userName : string
  userBooks : any
  querytext: string

  constructor(public authService : AuthService) { }

  ngOnInit() {
    this.getUserData()
  }

  getUserData(){
    this.token = localStorage.getItem('CurrentUser');
    this.authService.getUserdetails(this.token).then(res => {
      this.success = true
      if(res && res.user_name && res.user_books) {
        this.userName = res.user_name;
        this.userBooks = res.user_books;
      }
      //add loader later
    }).catch(() => {
      this.success = false;
      
    })

  }

  onKeyUp(event : any){
    this.token = localStorage.getItem('CurrentUser'); // make a fucntion to gettoken in auth service todo
    this.querytext = event.target.value;
    this.authService.getFilteredBooks(this.querytext,this.token).then(res => {
      this.success = true
      if(res && res.user_books) {
        this.userBooks = res.user_books;
      }
      //add loader later
    }).catch(() => {
      this.success = false;
      
    })

  }

  

}
