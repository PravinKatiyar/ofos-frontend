import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  public loginuser:any={};
public user:any={ };

constructor(private authService: LoginAuthService,private userService: UserserviceService) {
  this.authService.isLoggedIn();
  this.loginuser=JSON.parse(localStorage.getItem('currentUser'));
 }

ngOnInit() {
  this.userService.getAdminUser(this.loginuser.token).subscribe(user=>{
  this.user=user;
  })
}

}
