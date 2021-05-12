import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { MycartComponent } from './mycart/mycart.component';
import { FarmerComponent } from './farmer/farmer.component';
import { SmartcardComponent } from './smartcard/smartcard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupfarmerComponent } from './signupfarmer/signupfarmer.component';
import { TableComponent } from './table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CustomerComponent,
    MycartComponent,
    FarmerComponent,
    SmartcardComponent,
    SignupfarmerComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
