import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';


import { Restaurant, RestaurantServiceService } from '../restaurant-service.service';


@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {

 restaurant: Restaurant=new Restaurant();
  
  message: any;
  service: any;

  
  constructor(private restaurantService:RestaurantServiceService) { }

  ngOnInit(): void{
  }
  RegisterRestaurant(){
    
    if( this.restaurant.restaurantName != ""&& this.restaurant.ownerName!=""&&this.restaurant.phoneNumber!=""&&this.restaurant.email!=""&&this.restaurant.city!=""&&this.restaurant.address!=""&&this.restaurant.pincode!=""){
      this.restaurantService.create(this.restaurant).subscribe((data: string)=>{
        this.message=data;
        alert(this.message);
      }
      );
  }
  else{
    this.message = "Sorry!! Restaurant was not inserted";
    alert(this.message="Sorry!!Restaurant was not inserted");
  }
  }

  
}