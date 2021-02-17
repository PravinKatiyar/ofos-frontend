import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant, RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-restaurantforuser',
  templateUrl: './restaurantforuser.component.html',
  styleUrls: ['./restaurantforuser.component.css']
})
export class RestaurantforuserComponent implements OnInit {

  restaurant: Restaurant = new Restaurant();
  restaurant1:any;
  message:any;
  check:boolean=false;
  allrestaurant:any;
  click:boolean=false;
  restaurants:any;
  sessionRestaurant:any;
  page:number=1;
  totalRecords:number;
  nameSearch:string='';

  constructor(private service:RestaurantServiceService, private router :Router) { }
  
 
   ngOnInit(): void {
     this.service.viewAllRestaurants().subscribe((data)=>{this.restaurant1=data
     this.totalRecords=this.restaurant1.length;
     console.log(this.totalRecords);
     });
   }


  public viewFoodItemsByRestaurant(restId:number){
   
    this.router.navigate(['itemdetailsbyRestaurantforuser',restId]);
  }

}

