import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { map } from '@here/maps-api-for-javascript';
import { Isation } from 'src/app/model/isation';
import { Station } from 'src/app/model/Station';
import { StationServiceService } from 'src/app/Services/station-service.service';

@Component({
  selector: 'app-hero-here',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.css']
})
export class HereComponent implements OnInit {
   

  private map?: H.Map;
  @Input() public zoom = 2;
  @Input() public lat = 0;
  @Input() public lng = 0;
 

  @ViewChild('map') mapDiv?: ElementRef; 
    public mapElement!: ElementRef;

    private platform : any;
    private st : Station = new Station();
  
    
      
       

   public constructor(private stationservice : StationServiceService) { 
    /*this.platform = new H.service.Platform({
      "apikey": "LiRZRGrB5GGyObd9fiGgXHgNyLghYC9UXkiakTl-KLQ"
  });*/
      
      
   }
   
    public ngOnInit(): void {
      
  }

  public ngAfterViewInit() {
    if (!this.map && this.mapDiv) {
      // instantiate a platform, default layers and a map as usual
      const platform = new H.service.Platform({
        apikey: 'LiRZRGrB5GGyObd9fiGgXHgNyLghYC9UXkiakTl-KLQ'
      });
      const layers = platform.createDefaultLayers();
      const map = new H.Map(
        this.mapDiv.nativeElement,
        layers.vector.normal.map,
        {
          pixelRatio: window.devicePixelRatio,
          center: {lat: 48.8182, lng: 2.3212},
          zoom: 20,
        },
      );
      this.map = map;
    }
  }

     

     
        

   
      
    
 FillStationFileds(){
    this.st.AdressPostal = "92222";
    this.st.NameCity="cachan";
    this.st.Status = false;
    
    return this.st;
   }

   ngOnChanges(changes: SimpleChanges) {
    if (this.map) {
      if (changes.zoom !== undefined) {
        this.map.setZoom(changes.zoom.currentValue);
      }
      if (changes.lat !== undefined) {
        this.map.setCenter({lat: changes.lat.currentValue, lng: this.lng});
      }
      if (changes.lng !== undefined) {
        this.map.setCenter({lat: this.lat, lng: changes.lng.currentValue});
      }
    }

}


 

}