
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

  constructor(private citiesService : ReceiveChefNameService) { }

  ngOnInit() {



  }

  options = {

      componentRestrictions: { country: "fr" }


     }
  public AddressChange(address: any) {
  //setting address from API to local variable
   this.formattedaddress=address.formatted_address;
}
}
