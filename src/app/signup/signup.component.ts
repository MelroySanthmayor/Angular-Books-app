import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userdata : any
  success = true
  constructor(public authService : AuthService, private router : Router) { }

  ngOnInit() {
  }

  onSubmit(data){
    this.userdata = {
      name: data.name,
      email: data.email,
      password: data.pswd
    }
    this.authService.Register(this.userdata).then(res => {
      this.success = true
      if(res && res.auth && res.token) {
        localStorage.setItem('CurrentUser',res.token);
        this.authService.setLoggedIN(true);
        this.authService.emitChange(true);
        this.router.navigate(['/books-page']);
      }
      //add loader later
    }).catch(() => {
      this.success = false;
      
    })

  }

}
