import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerStatus = false;
  model: any = {};
  values: any;
  username: string;
  password: string;
  constructor(private authService: AuthService, private http:HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues(){
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

  registerToggle() {
    this.registerStatus = !this.registerStatus;
  }

  register() {
    if(this.model.password == this.model.passwordConfirm) {
      this.authService.register(this.model).subscribe(() => {
        console.log("User has been registered");
      }, error => {
        console.log("Registration failed");
      });
    }
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log("Login Success");
    }, error => {
      console.log("Error logging in");
    })
  }

}
