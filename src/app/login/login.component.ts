import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //loginEmail : string = "mike@gmail.com"
  userdata : any
  success = true
  constructor( public authService : AuthService, private router : Router) { }

  ngOnInit() {
  }

  onSubmit(data) {
    //alert(data.name+"Email id: "+ data.email + "Passwrod is: "+ data.pswd)
    this.userdata = {
      email: data.email,
      password: data.pswd
    }
    this.authService.Login(this.userdata).then(res => {
      this.success = true
      if(res && res.auth && res.token) {
        localStorage.setItem('CurrentUser',res.token);
        this.router.navigate(['/books-page']);
      }
      //add loader later
    }).catch(() => {
      this.success = false;
      
    })

  }
  

}
