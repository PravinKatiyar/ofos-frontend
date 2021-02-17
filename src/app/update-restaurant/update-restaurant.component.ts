import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Restaurant, RestaurantServiceService } from '../restaurant-service.service';


@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  
  restaurant: Restaurant = new Restaurant();
  restaurant1:any;
  message:any;
  check:boolean=false;
  allrestaurant:any;
  click:boolean=false;
  restaurants:any;
  constructor(private service:RestaurantServiceService, private router :Router) { }

  
   ngOnInit(): void {
     this.service.viewAllRestaurants().subscribe((data)=>this.restaurant1=data);
   }

   public addfoodItemsToRestaurant(restId:number){
    this.router.navigate(['addfooditem',restId]);
  }

  public viewFoodItemsByRestaurant(restId:number){
    this.router.navigate(['itemdetailsbyRestaurant',restId]);
  }



   updateRestaurant(restaurantData:Restaurant){
     this.restaurant = restaurantData;
     this.click = true;
   }

  updateDetails(){
    
    this.service.updateRestaurant(this.restaurant).subscribe((data)=>this.message=data);
    this.check=true;
  }
  deleteRestaurant(restaurantId:number){
    this.service.deleteRestaurant(restaurantId).subscribe((data)=>this.restaurant1=data);
    this.check = true;
  }
}
