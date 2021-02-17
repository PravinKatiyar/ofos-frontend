import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
public loginuser:any={};
public user:any={ };
public user1:any;


  constructor(private authService: LoginAuthService,private userService: UserserviceService) {
    this.authService.isLoggedIn();
    this.loginuser=JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.userService.getUser(this.loginuser.token).subscribe(user=>{
    this.user=user;
    sessionStorage.setItem('userdata',JSON.stringify(user));
    console.log(sessionStorage.getItem('userdata'));


    })
  }

}
