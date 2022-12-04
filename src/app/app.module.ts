import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddCarsComponent } from './add-cars/add-cars.component';
import { ViewCarsComponent } from './view-cars/view-cars.component';
import { NavbarComponent } from './navbar/navbar.component';
const myRouter:Routes=[
  {
    path:'',
    component:AdminLoginComponent
  },
  {
    path:'addCars',
    component:AddCarsComponent
  },
  {
    path:'viewCars',
    component:ViewCarsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddCarsComponent,
    ViewCarsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRouter),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
