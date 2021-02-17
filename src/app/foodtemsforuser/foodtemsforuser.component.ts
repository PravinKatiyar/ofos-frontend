import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FooditemService } from '../fooditem.service';
import { OrderDetails } from '../models/OrderDetails';
import { Observable } from 'rxjs';
import { FoodItems } from '../models/FoodItems';

@Component({
  selector: 'app-foodtemsforuser',
  templateUrl: './foodtemsforuser.component.html',
  styleUrls: ['./foodtemsforuser.component.css']
})
export class FoodtemsforuserComponent implements OnInit {
  itemId:number;
  fooditems:any;
  foodItems:any;
  restId:any;
  userid:Number;
  restaurantName:string='';
  public fooditemsx:any={ };
  orderDetails:OrderDetails;
  page:number=1;
  totalRecords:number;
  nameSearch:string='';
  itemtoSearch:any=''
  constructor(private service:FooditemService,private router: Router,private route:ActivatedRoute) { }

  orderItem(iId:any): any{
    console.log(iId);
    this.router.navigate(['/orderfoodItem',iId]);


  }
  ngOnInit(): any {
    this.restId=this.route.snapshot.params['restId'];
    console.log(this.restId);
    console.log(this.itemId);
    this.service.fetchFoodItemByRestaurantavailablefoodItems(this.restId).subscribe(data=>{
      this.fooditems=data
      this.totalRecords=this.fooditems.length;
     console.log(this.totalRecords);
    });
    }
}
