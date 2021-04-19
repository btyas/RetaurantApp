import { ReceiveChefNameService } from './Services/Receive-Chef-Name.service';
import { LoginComponent } from './User/Login/Login.component';
import { CategoryListComponent } from './Categories/Category-List/Category-List.component';
import { CategoryCardComponent } from './Categories/Category-Card/Category-Card.component';
import { HeroComponent } from './hero/Hero/Hero.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/NavBar/NavBar.component';
import { RegisterComponent } from './User/Register/Register.component';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroComponent,

    CategoryCardComponent,
    CategoryListComponent,
    RegisterComponent,
    LoginComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //GooglePlaceModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [ReceiveChefNameService],
  bootstrap: [AppComponent]
})
export class AppModule {





}
