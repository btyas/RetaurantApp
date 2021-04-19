

import { Component, Input, OnInit } from '@angular/core';
import { IPropertyBaseCity } from 'src/app/model/IPropertyBaseCity';



@Component({
  selector: 'app-Category-Card',
  templateUrl: './Category-Card.component.html',
  styleUrls: ['./Category-Card.component.css']
})
export class CategoryCardComponent {
  @Input() property? : IPropertyBaseCity;





}
