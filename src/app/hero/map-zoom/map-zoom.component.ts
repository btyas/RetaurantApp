import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-map-zoom',
  templateUrl: './map-zoom.component.html',
  styleUrls: ['./map-zoom.component.css']
})



export class MapZoomComponent implements OnInit {
  


  @Output() notify = new EventEmitter();
  constructor() { 

   
  }
  

  ngOnInit(): void {
    
  }

}
