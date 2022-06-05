import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { map } from '@here/maps-api-for-javascript';
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
     var map = new H.Map(
        this.mapElement.nativeElement,
        defaultLayers.vector.normal.map,
        {
            zoom: 10,
            center: { lat: 48.787442, lng: 2.301786 },
            pixelRatio: window.devicePixelRatio || 1
        }
    
       
        
    );
   
    map.addObject(new H.map.Circle(
      // The central point of the circle
      {lat: 48.787442, lng: 2.301786 },
      // The radius of the circle in meters
      80,
      {
        style: {
          strokeColor: 'rgba(55, 85, 170, 0.6)', // Color of the perimeter
          lineWidth: 2,
          fillColor: 'rgba(0, 128, 0, 0.7)'  // Color of the circle
        }
      }
    ));
    window.addEventListener('resize', () => map.getViewPort().resize());
    
    
      map.setZoom(20);
// Create the default UI components
     
   /// this.addCircleToMap();
}

}

