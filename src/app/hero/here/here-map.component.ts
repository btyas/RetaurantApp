import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
declare var H : any;
@Component({
  selector: 'app-hero-here',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.css']
})
export class HereComponent implements OnInit {
   
   

    @ViewChild("map")
    public mapElement!: ElementRef;
    private platform : any;

    


   public constructor() { 
    this.platform = new H.service.Platform({
      "apikey": "LiRZRGrB5GGyObd9fiGgXHgNyLghYC9UXkiakTl-KLQ"
  });
   }
   
    public ngOnInit(): void {
  }

  public ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
    let map = new H.Map(
        this.mapElement.nativeElement,
        defaultLayers.vector.normal.map,
        {
            zoom: 10,
            center: { lat: 37.7397, lng: -121.4252 },
            
        }
    );
}

}
