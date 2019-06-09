import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
  BookData : any

  constructor(public authService : AuthService, private router : Router) { }

  ngOnInit() {
    this.getUserData()
  }

  getUserData(){
    this.authService.setLoggedIN(true);
    this.token = localStorage.getItem('CurrentUser');
    this.authService.getUserdetails(this.token).then(res => {
      this.success = true
      if(res && res.user_name && res.user_books) {
        this.userName = res.user_name;
        this.userBooks = res.user_books;
      }
      if(res && res.auth === false){
        this.router.navigate(['/login']);
      }
      //add loader later
    }).catch(() => {
      this.success = false;
      
    })

  }

  onKeyUp(event : any){
    //this.token = localStorage.getItem('CurrentUser'); // make a fucntion to gettoken in auth service todo
    this.querytext = event.target.value;
    this.authService.getFilteredBooks(this.querytext,this.token).then(res => {
      this.success = true
      if(res && res.user_books) {
        this.userBooks = res.user_books;
      }
      if(res && res.auth === false){
        this.router.navigate(['/login']);
      }
      //add loader later
    }).catch(() => {
      this.success = false;
      
    })

  }

  onSubmit(data){
    this.BookData = {
      title : data.title,
      author : data.author
    }

    this.authService.createBook(this.BookData,this.token).then(res => {
      this.success = true
      if(res){
        this.userBooks = res;
      }
      if(res && res.auth === false){
        this.router.navigate(['/login']);
      }
    }).catch(() => {
      this.success = false;
      
    })
    
  }

  

}


// {
//   "auth": false,
//   "message": "Failed to authenticate token."
// }