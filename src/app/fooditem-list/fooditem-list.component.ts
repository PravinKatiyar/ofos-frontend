import { Component, OnInit } from '@angular/core';
import { FooditemService } from '../fooditem.service';
import { ActivatedRoute, Router} from '@angular/router';
import { foodItems } from '../foodItems';


@Component({
  selector: 'app-fooditem-list',
  templateUrl: './fooditem-list.component.html',
  styleUrls: ['./fooditem-list.component.css']
})
export class FooditemListComponent implements OnInit {
  itemId:number;
  fooditems:any;
  foodItems:any;
  restId:any;
  constructor(private service:FooditemService,private router: Router,private route:ActivatedRoute) { }

  
  ngOnInit(): any {
  this.restId=this.route.snapshot.params['restId'];
  console.log(this.restId);
  this.service.fetchFoodItemByRestaurant(this.restId).subscribe(data=>this.fooditems=data);
 // let output=this.service.getItem(this.itemId);

  

 // output.subscribe()
  }
  
  public deleteItem(itemId:number){
    let resp= this.service.deleteItem(itemId);
    resp.subscribe((data)=>this.fooditems=data)

    this.goToList();
   }

   public updateItem(itemId:number){
     this.router.navigate(['update',itemId]);
   }

   goToList(){
    alert("Food Item deleted successfully");
    this.router.navigate(['/details']);
   }

   public DetailstById(){
    let output=this.service.getItem(this.restId)
    output.subscribe((data)=>{
      if(data==null){
        alert("Item Id is invalid");
        return false;
      }
      else{
        this.fooditems=data;
        return true;
      }});
   }
  


}
