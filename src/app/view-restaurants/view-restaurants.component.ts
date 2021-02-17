import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-view-restaurants',
  templateUrl: './view-restaurants.component.html',
  styleUrls: ['./view-restaurants.component.css']
})
export class ViewRestaurantsComponent implements OnInit {
  
restaurants:any;
  
constructor(private restaurantservice:RestaurantServiceService) { }

ngOnInit(): void {
  this.restaurantservice.viewAllRestaurants().subscribe((data)=>this.restaurants=data);
  }

}
