import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //loginEmail : string = "mike@gmail.com"
  constructor() { }

  ngOnInit() {
  }

  onSubmit(data) {
    alert(data.name+"Email id: "+ data.email + "Passwrod is: "+ data.pswd)

  }

}
