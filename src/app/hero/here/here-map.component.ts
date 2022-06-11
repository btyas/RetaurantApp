import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { map } from '@here/maps-api-for-javascript';
import { Isation } from 'src/app/model/isation';
import { Station } from 'src/app/model/Station';
import { StationServiceService } from 'src/app/Services/station-service.service';
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
    private st : Station = new Station();
  
    
      
       

   public constructor(private stationservice : StationServiceService) { 
    this.platform = new H.service.Platform({
      "apikey": "LiRZRGrB5GGyObd9fiGgXHgNyLghYC9UXkiakTl-KLQ"
  });
      
      
   }
   
    public ngOnInit(): void {
      console.log(this.stationservice.getAllStationsProp().subscribe(
        (response) => console.table(response),
        (err : any) => console.log(err),
        ()=> console.log('Done getting data')
      )) ;
      
      this.st.StreetName ="this is street test on nginit";

      console.log(this.stationservice.SaveStation(this.st).subscribe(
        (response) => console.table(response),
        (err : any) => console.log(err),
        ()=> console.log('Done sending station data')
      ));
  }

  public ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
   //console.log(this.stationservice.getAllStationsProp()); 
    
      

     

     
        

     var map = new H.Map(
        this.mapElement.nativeElement,
        defaultLayers.vector.normal.map,
        {
            zoom: 8,
            center: { lat: 48.787442, lng: 2.301786 },
            pixelRatio: window.devicePixelRatio || 1
        }
    
       
        
    );
    


    map.addObject(new H.map.Circle(
      // The central point of the circle
      {lat: 48.787442, lng: 2.301786 },
      // The radius of the circle in meters
      1,
      {
        style: {
          strokeColor: 'rgba(55, 85, 170, 0.6)', // Color of the perimeter
          lineWidth: 2,
          fillColor: 'rgba(0, 128, 0, 0.7)'  // Color of the circle
        }
      }
    ));
    window.addEventListener('resize', () => map.getViewPort().resize());
    
    
      map.setZoom(15);
// Create the default UI components
     
   /// this.addCircleToMap();
}
    
 FillStationFileds(){
    this.st.AdressPostal = "92222";
    this.st.NameCity="cachan";
    this.st.Status = false;
    
    return this.st;
   }


}

