import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { LoginAuthService } from '../login-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  msg = '';
  user: User = new User();
  reponse: Response = new Response();
  constructor(private userService:UserserviceService,
    private authService: LoginAuthService,
    private router:Router) { 
      this.authService.isLoggedIn();
    }

  ngOnInit() {
  }
  addUser(user:any,registrationForm:any): any {
    this.userService.signUp(this.user)
      .subscribe(data => { //subscribing the service
       
       if(data.message=="User is Registered Successfully")
       {
         alert("User is Registered Successfully!!")
         registrationForm.reset();
        //  this.router.navigate(['']);
       }
       else{
        this.msg=data.message;
       }
      },
        error => {
         this.msg = error.error.message;
       
        }
      );
  };

}
