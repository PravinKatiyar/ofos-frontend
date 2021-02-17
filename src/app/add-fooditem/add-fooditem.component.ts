import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FooditemService } from '../fooditem.service';
import { foodItems } from '../foodItems';

@Component({
  selector: 'app-add-fooditem',
  templateUrl: './add-fooditem.component.html',
  styleUrls: ['./add-fooditem.component.css']
})
export class AddFooditemComponent implements OnInit {
  foodItem: foodItems=new foodItems();
  restaurantId:number;
  fooditems:any;
  submitted=false;
  restId:any;
  constructor(private route:ActivatedRoute,private router: Router, private service: FooditemService) { }

  ngOnInit() {
  this.restId=this.route.snapshot.params['restId'];
  }

  newItem():void{
    this.submitted=false;
    this.foodItem=new foodItems();
  }

  add(restaurantId:number){
    this.service.addItem(this.restId,this.foodItem)
    .subscribe(data=>console.log(data));
    this.foodItem=new foodItems();
    this.router.navigate(['Update-Restaurant']);
  }
  onSubmit(){
    this.submitted=true;
    this.add(this.restaurantId);
  }

}
