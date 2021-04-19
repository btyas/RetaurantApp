


import { ReceiveChefNameService } from './../../Services/Receive-Chef-Name.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Identifiers } from '@angular/compiler';
import { Key } from 'selenium-webdriver';
import { IPropertyBaseCity } from 'src/app/model/IPropertyBaseCity';
@Component({
  selector: 'app-Category-List',
  templateUrl: './Category-List.component.html',
  styleUrls: ['./Category-List.component.css']
})
export class CategoryListComponent implements OnInit {



 properties? :   IPropertyBaseCity[];

constructor(private receiveData : ReceiveChefNameService) {

   }

  ngOnInit() {

      this.receiveData.getAllProperties().subscribe(
      data => {
        this.properties =data;
        console.log(this.properties);
      }
    );




  }


       getData()
       {





       }



  }




