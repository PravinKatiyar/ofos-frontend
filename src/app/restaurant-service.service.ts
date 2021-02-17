import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Restaurant {
 
  restaurantId:number;
  restaurantName:string;
  ownerName:string;
  phoneNumber:string;
  email:string;
  city:string;
  address:string;
  pincode:string;
  // constructor(restaurantId:number, restaurantname:string, restaurantownername:string, restaurantphonenumber:string, restaurantemail:string, restaurantcity:string, restaurantaddress:string, restaurantpincode:string){
  //         this.restaurantId = restaurantId;
  //         this.restaurantName = restaurantname;
  //         this.ownerName =restaurantownername;
  //         this.phoneNumber=restaurantphonenumber;
  //         this.email=restaurantemail;
  //         this.city=restaurantcity;
  //         this.address=restaurantaddress;
  //         this.pincode=restaurantpincode;
  //     }
}
@Injectable({
  providedIn: 'root'
})

export class RestaurantServiceService {
  getRestaurantDetails(restaurantId: number) {
    throw new Error('Method not implemented.');
  }
  createRestaurant(restaurant: Restaurant) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }


  public create(restaurant:Restaurant){
    
    console.log(restaurant);

    return this.http.post("http://localhost:8082/createRestaurant",restaurant,{responseType: 'text'});
  }

  public viewAllRestaurants(){
    return this.http.get("http://localhost:8082/fetchAllRestaurant",{responseType: 'json'});
  }

  

  public deleteRestaurant(restaurantid:number){
    return this.http.delete("http://localhost:8082/deleteRestaurant/"+restaurantid);
  }

  public updateRestaurant(restaurant:Restaurant){
    return this.http.put("http://localhost:8082/updateRestaurant",restaurant,{responseType:'text'});

   
  }
  public searchRestaurant(restaurantid:number){
    return this.http.get("http://localhost:8082//getRestaurantDetails/"+restaurantid,{responseType: 'json'});
  }
}

