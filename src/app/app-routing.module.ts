import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { FarmerComponent } from './farmer/farmer.component';
import { HomeComponent } from './home/home.component';
import { MycartComponent } from './mycart/mycart.component';
import { SmartcardComponent } from './smartcard/smartcard.component';

const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'customer',component:CustomerComponent},
  { path:'farmer',component:FarmerComponent},
  { path:'mycart',component:MycartComponent},
  { path:'smartcard',component:SmartcardComponent},

 {path:'',component :HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
