import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AuthGuard } from './auth.guards';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { WalletrechargeComponent } from './walletrecharge/walletrecharge.component';
import { ViewAllOrderComponent} from 'src/app/view-all-order/view-all-order.component';
import { ViewMyOrdersComponent } from './view-my-orders/view-my-orders.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { ViewRestaurantsComponent } from './view-restaurants/view-restaurants.component';
import { AddFooditemComponent } from './add-fooditem/add-fooditem.component';
import { FooditemListComponent } from './fooditem-list/fooditem-list.component';
import { UpdateFooditemComponent } from './update-fooditem/update-fooditem.component';
import { RestaurantforuserComponent } from './restaurantforuser/restaurantforuser.component';
import { FoodtemsforuserComponent } from './foodtemsforuser/foodtemsforuser.component';
import { OrderComponent } from './order/order.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { DeliveryOrderComponent } from './delivery-order/delivery-order.component';


//declaring router path for corresponding components
export const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'aboutus', component: AboutUsComponent },
  {path:'Signup',component:SignupComponent},
  {path:'Signin',component:LoginComponent },
  {path:'admindashboard',component:AdmindashboardComponent,canActivate:[AuthGuard]},
  {path:'userdashboard',component:UserdashboardComponent,canActivate:[AuthGuard]},
  {path:'walletrecharge',component:WalletrechargeComponent},
  {path:'viewAllOrders',component:ViewAllOrderComponent},
  {path:'viewMyOrders',component:ViewMyOrdersComponent},
  {path:'Create-Restaurant', component:CreateRestaurantComponent},
  {path:'Update-Restaurant', component:UpdateRestaurantComponent},
  {path:'View-All-Restaurant', component:ViewRestaurantsComponent},
  {path:'addfooditem/:restId',component:AddFooditemComponent},
  {path:'itemdetailsbyRestaurant/:restId',component:FooditemListComponent},
  {path:'update/:itemId',component:UpdateFooditemComponent},
  {path:'Restaurantsforuser',component:RestaurantforuserComponent},
  {path:'itemdetailsbyRestaurantforuser/:restId',component:FoodtemsforuserComponent},
  {path:'orderfoodItem/:iId',component:OrderComponent},
  {path:'trackorder/:iId',component:TrackOrderComponent},
  {path:'deliveryOrder',component:DeliveryOrderComponent}
 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

