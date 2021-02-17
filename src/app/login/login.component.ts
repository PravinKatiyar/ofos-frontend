import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthService } from '../login-auth.service';
import { User } from '../models/User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg = '';
  user: User = new User();

  constructor(private userService:UserserviceService, private router:Router,
    private authService: LoginAuthService) { 
    this.authService.isLoggedIn();
  }

  ngOnInit() {
  }
  SignIn() {
    this.userService.signIn(this.user)
      .subscribe(data => { //subscribing the service
       if(data){
         if(data.token){
           localStorage.setItem('currentUser',JSON.stringify(data));
           if(data.user.role==='ADMIN'){
                this.router.navigate(['/admindashboard']);
           }
           else{
            this.router.navigate(['/userdashboard']);
           }
         }
       }
      },
        error => {
         this.msg = error.error.message;
       
        }
      );
  };

}
