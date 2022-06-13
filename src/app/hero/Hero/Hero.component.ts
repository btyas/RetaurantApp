
import { Observable } from 'rxjs';
import { ReceiveChefNameService } from './../../Services/Receive-Chef-Name.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-Hero',
  templateUrl: './Hero.component.html',
  styleUrls: ['./Hero.component.css']
})
export class HeroComponent implements OnInit {
  formattedaddress=" ";
  
  constructor(private citiesService : ReceiveChefNameService) {
    this.zoom = 2;
    this.lat = 0;
    this.lng = 0;


   }


  zoom: number;
  lat: number;
  lng: number;
  ngOnInit() {



  }
     handleInputChange(event: Event) {
    const target = <HTMLInputElement> event.target;
    if (target) {
      if (target.name === 'zoom') {
        this.zoom = parseFloat(target.value);
      }
      if (target.name === 'lat') {
        this.lat = parseFloat(target.value);
      }
      if (target.name === 'lng') {
        this.lng = parseFloat(target.value);
      }
    }
  }
  options = {

      componentRestrictions: { country: "fr" }


     }
  public AddressChange(address: any) {
  //setting address from API to local variable
   this.formattedaddress=address.formatted_address;
}
}
